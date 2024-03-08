import type { RequestHandler } from '@sveltejs/kit';
import { addContact } from '$lib/server/sendgrid';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const { firstName, lastName, email, phone, country, education } = body;

		const errors = {
			...(!firstName && { firstName: 'First name is required' }),
			...(!lastName && { lastName: 'Last name is required' }),
			...(!email && { email: 'Email is required' }),
			...(!phone && { phone: 'Phone is required' }),
			...(!country && { country: 'Country is required' }),
			...(!education && { education: 'Education is required' })
		};

		if (Object.keys(errors).length) {
			return new Response(JSON.stringify({ errors }), {
				status: 400
			});
		}

		await addContact({
			firstName,
			lastName,
			email,
			phone,
			country,
			education
		});
	} catch (error) {
		return new Response(
			JSON.stringify({
				message: `Failed to add contact to SendGrid: ${error}`
			}),
			{
				status: 500
			}
		);
	}

	return new Response(
		JSON.stringify({
			message: 'Contact added to SendGrid'
		}),
		{
			status: 200
		}
	);
};
