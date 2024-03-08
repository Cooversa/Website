import type { RequestHandler } from '@sveltejs/kit';
import { sendWelcomeEmail } from '$lib/server/sendgrid';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const { email, firstName } = body;

	const errors = {
		...(!email && { email: 'Email is required' }),
		...(!firstName && { firstName: 'First name is required' })
	};

	if (Object.keys(errors).length) {
		return new Response(JSON.stringify({ errors }), {
			status: 400
		});
	}

	try {
		await sendWelcomeEmail({ email, firstName });
	} catch (error) {
		return new Response(
			JSON.stringify({
				message: `Failed to send welcome email: ${error}`
			}),
			{
				status: 500
			}
		);
	}

	return new Response(
		JSON.stringify({
			message: 'Welcome email sent'
		}),
		{
			status: 200
		}
	);
};
