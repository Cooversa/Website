import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { z } from 'zod';
import { verifyCoupon } from '$lib/appwrite';

const schema = z.object({
	firstName: z.string({ required_error: 'First name is required' }),
	lastName: z.string({ required_error: 'Last name is required' }),
	email: z.string({ required_error: 'Email is required' }),
	phone: z.string({ required_error: 'Phone number is required' }).regex(/^\+\d{1,3}[0-9]{8,12}$/, {
		message:
			"Phone number must be entered in the format: '+2340123456789'. Up to 15 digits allowed."
	}),
	country: z.string({ required_error: 'Country is required' }),
	education: z.string({ required_error: 'Level of education is required' })
});

type Error = {
	firstName?: string[];
	lastName?: string[];
	email?: string[];
	phone?: string[];
	country?: string[];
	education?: string[];
	server?: string[];
	coupon?: string[];
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const firstName = data.get('firstName') as string;
		const lastName = data.get('lastName') as string;
		const email = data.get('email') as string;
		const phone = data.get('phone') as string;
		const country = data.get('country') as string;
		const education = data.get('education') as string;
		const coupon = data.get('coupon') as string;

		try {
			const result = schema.parse({
				...(firstName && { firstName: firstName.trim() }),
				...(lastName && { lastName: lastName.trim() }),
				...(email && { email: email.trim() }),
				...(phone && { phone: phone.trim() }),
				...(country && { country: country.trim() }),
				...(education && { education: education.trim() })
			});

			if (coupon) {
				const couponValid = await verifyCoupon(coupon as string);

				if (!couponValid) {
					return fail(400, { coupon: ['Coupon is invalid'] });
				} else {
					return {
						body: {
							...result,
							coupon
						},
						amount: 15000 - couponValid.amount
					};
				}
			}

			return {
				body: {
					...result
				},
				amount: 15000
			};
		} catch (error) {
			let errors: Error = {};

			if (error instanceof z.ZodError) {
				errors = error.flatten().fieldErrors;
				return fail(400, errors);
			} else {
				console.error(error);
				return fail(500, { server: ['An error occurred'] });
			}
		}
	}
} satisfies Actions;
