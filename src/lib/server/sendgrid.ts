import {
	PRIVATE_SENDGRID_API_KEY,
	PRIVATE_SENDGRID_CONTACT_LIST_ID,
	PRIVATE_SENDGRID_WELCOME_EMAIL_ID
} from '$env/static/private';
import client from '@sendgrid/client';
import mail, { type MailDataRequired } from '@sendgrid/mail';
import type { ClientRequest } from '@sendgrid/client/src/request';
import type { Student } from '../appwrite';

client.setApiKey(PRIVATE_SENDGRID_API_KEY);
mail.setApiKey(PRIVATE_SENDGRID_API_KEY);

export const addContact = async (student: Student) => {
	const data = {
		list_ids: [PRIVATE_SENDGRID_CONTACT_LIST_ID],
		contacts: [
			{
				email: student.email,
				first_name: student.firstName,
				last_name: student.lastName,
				phone_number: student.phone,
				country: student.country,
				custom_fields: {
					education: student.education
				}
			}
		]
	};

	const request = {
		url: `/v3/marketing/contacts`,
		method: 'PUT',
		body: data
	};

	try {
		return (await client.request(request as ClientRequest))[0].body;
	} catch (error) {
		throw new Error(`Failed to add contact to SendGrid: ${error}`);
	}
};

export const sendWelcomeEmail = async (data: { email: string; firstName: string }) => {
	const message: MailDataRequired = {
		from: {
			email: 'no-reply@cooversa.com.ng',
			name: 'No Reply - Cooversa'
		},
		replyTo: 'support@cooversa.com.ng',
		templateId: PRIVATE_SENDGRID_WELCOME_EMAIL_ID,
		dynamicTemplateData: {
			name: data.firstName
		},
		to: data.email
	};

	try {
		await mail.send(message);
	} catch (error) {
		throw new Error(`Failed to send welcome email: ${error}`);
	}
};
