import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { z } from 'zod';
import { verifyCoupon } from '$lib/appwrite';

const schema = z.object({
	firstName: z.string({ required_error: 'First name is required' }),
	lastName: z.string({ required_error: 'Last name is required' }),
	email: z.string({ required_error: 'Email is required' }),
	phone: z
		.string({ required_error: 'Phone number is required' })
		.regex(/^\+\d{1,3}[0-9]{8,12}$/, { message: 'Phone number is invalid' }),
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
		const firstName = data.get('firstName');
		const lastName = data.get('lastName');
		const email = data.get('email');
		const phone = data.get('phone');
		const country = data.get('country');
		const education = data.get('education');
		const coupon = data.get('coupon');

		try {
			const result = schema.parse({
				...(firstName && { firstName: firstName }),
				...(lastName && { lastName: lastName }),
				...(email && { email }),
				...(phone && { phone }),
				...(country && { country }),
				...(education && { education })
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
						amount: 10000 - couponValid.amount
					};
				}
			}

			return {
				body: {
					...result
				},
				amount: 10000
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
