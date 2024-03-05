import {
	PUBLIC_APPWRITE_DATABASE_ID,
	PUBLIC_APPWRITE_STUDENTS_COLLECTION_ID
} from '$env/static/public';
import { ID, database } from '.';

type Student = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	country: string;
	education: string;
	coupon: string;
};

export const saveStudent = async (student: Student) => {
	return await database.createDocument(
		PUBLIC_APPWRITE_DATABASE_ID,
		PUBLIC_APPWRITE_STUDENTS_COLLECTION_ID,
		ID.unique(),
		student
	);
};
