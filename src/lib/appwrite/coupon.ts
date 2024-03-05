import {
	PUBLIC_APPWRITE_COUPON_COLLECTION_ID,
	PUBLIC_APPWRITE_DATABASE_ID
} from '$env/static/public';
import { Query, database } from '.';

export const verifyCoupon = async (coupon: string) => {
	const query = (
		await database.listDocuments(
			PUBLIC_APPWRITE_DATABASE_ID,
			PUBLIC_APPWRITE_COUPON_COLLECTION_ID,
			[Query.equal('code', coupon)]
		)
	).documents;

	if (query.length === 0) {
		return false;
	}

	const couponData = query[0];

	if (couponData.remaining_usage !== null && couponData.remaining_usage <= 0) {
		return false;
	}

	if (couponData.expires_on !== null && new Date(couponData.expires_on) < new Date()) {
		return false;
	}

	return {
		valid: true,
		amount: couponData.amount,
		id: couponData.$id
	};
};

export const subtractCouponUsage = async (coupon: string) => {
	const query = (
		await database.listDocuments(
			PUBLIC_APPWRITE_DATABASE_ID,
			PUBLIC_APPWRITE_COUPON_COLLECTION_ID,
			[Query.equal('code', coupon)]
		)
	).documents;

	if (query.length === 0) {
		return false;
	}

	const couponData = query[0];

	if (couponData.remaining_usage !== null) {
		await database.updateDocument(
			PUBLIC_APPWRITE_DATABASE_ID,
			PUBLIC_APPWRITE_COUPON_COLLECTION_ID,
			couponData.$id,
			{
				remaining_usage: couponData.remaining_usage - 1 < 0 ? 0 : couponData.remaining_usage - 1
			}
		);
	}

	return true;
};
