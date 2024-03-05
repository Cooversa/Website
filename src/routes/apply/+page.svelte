<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { PUBLIC_PAYSTACK_PUBLIC_KEY } from '$env/static/public';
	import { subtractCouponUsage } from '../../lib/appwrite';
	import { saveStudent } from '../../lib/appwrite/student';
	import type { PageData } from './$types';
	import { toast } from 'svelte-sonner';

	export let data: PageData;

	let errors: any = {};

	let loading = false;
</script>

<svelte:head>
	<title>Apply Now | Cooversa</title>
</svelte:head>

<section class="container mx-auto px-5 py-10 md:px-10 md:py-20">
	<h1 class="text-2xl font-semibold sm:text-3xl">Apply for Cooversa!</h1>
	<p class="text-sm leading-8">
		Get started on your path to a high-paying job with our flexible and practical coding program.
	</p>

	<form
		action=""
		method="post"
		class="mt-10 grid gap-x-5 gap-y-10 md:grid-cols-2 md:gap-x-10"
		use:enhance={() => {
			errors = {};
			loading = true;
			return async ({ result, update }) => {
				try {
					if (result.status === 200) {
						if (result.data.amount > 0) {
							let handler = PaystackPop.setup({
								key: PUBLIC_PAYSTACK_PUBLIC_KEY, // Replace with your public key
								email: result.data.body.email,
								amount: result.data.amount * 100,
								ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
								onClose: function () {
									toast.error('Payment cancelled');
								},
								callback: function (response) {
									if (response.status === 'success') {
										saveStudent(result.data.body);
										subtractCouponUsage(result.data.body.coupon);
										goto('/apply/success?firstName=' + result.data.body.firstName);
									} else {
										toast.error('Payment failed');
									}
								}
							});
							handler.openIframe();
						} else {
							await saveStudent(result.data.body);
							await subtractCouponUsage(result.data.body.coupon);
							goto('/apply/success?firstName=' + result.data.body.firstName);
						}
					} else if (result.status === 400) {
						errors = await result.data;
					} else {
						toast.error('An error occurred. Please try again later');
					}
				} finally {
					loading = false;
					update({
						reset: false
					});
				}
			};
		}}
	>
		<div class="form-field">
			<label for="firstName" class="form-label required">First name</label>
			<input
				type="text"
				id="firstName"
				name="firstName"
				class="form-input"
				placeholder="John"
				class:error={errors.firstName?.length > 0}
			/>
			{#if errors.firstName}
				{#each errors.firstName as error}
					<p class="form-error">{error}</p>
				{/each}
			{/if}
		</div>

		<div class="form-field">
			<label for="lastName" class="form-label required">Last name</label>
			<input
				type="text"
				id="lastName"
				name="lastName"
				class="form-input"
				placeholder="Doe"
				class:error={errors.lastName?.length > 0}
			/>
			{#if errors.lastName}
				{#each errors.lastName as error}
					<p class="form-error">{error}</p>
				{/each}
			{/if}
		</div>

		<div class="form-field">
			<label for="email" class="form-label required">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				class="form-input"
				placeholder="johndoe@company.com"
				class:error={errors.email?.length > 0}
			/>
			{#if errors.email}
				{#each errors.email as error}
					<p class="form-error">{error}</p>
				{/each}
			{/if}
		</div>

		<div class="form-field">
			<label for="phone" class="form-label required">Phone</label>
			<input
				type="tel"
				id="phone"
				name="phone"
				class="form-input"
				placeholder="+234 123 456 7890"
				class:error={errors.phone?.length > 0}
			/>
			{#if errors.phone}
				{#each errors.phone as error}
					<p class="form-error">{error}</p>
				{/each}
			{/if}
		</div>

		<div class="form-field">
			<label for="country" class="form-label required">Country of residence</label>
			<select
				id="country"
				name="country"
				class="form-input"
				class:error={errors.country?.length > 0}
			>
				{#each data.countryList as country}
					<option value={country}>{country}</option>
				{/each}
			</select>
		</div>

		<!-- Highest education level -->
		<div class="form-field">
			<label for="education" class="form-label required">Highest education level</label>
			<select
				id="education"
				name="education"
				class="form-input"
				class:error={errors.education?.length > 0}
			>
				<option value="high-school">High School</option>
				<option value="diploma">Undergraduate</option>
				<option value="diploma">Diploma</option>
				<option value="bachelors">Bachelors</option>
				<option value="masters">Masters</option>
				<option value="phd">PhD</option>
			</select>
		</div>

		<div class="form-field">
			<label for="coupon" class="form-label">Coupon</label>
			<input
				type="text"
				id="coupon"
				name="coupon"
				class="form-input"
				placeholder="Enter coupon code"
				class:error={errors.coupon?.length > 0}
			/>
			{#if errors.coupon}
				{#each errors.coupon as error}
					<p class="form-error">{error}</p>
				{/each}
			{/if}
		</div>

		<!-- Submit -->
		<div class="form-field md:col-span-2">
			<button type="submit" class="btn btn-primary">
				{#if loading}
					<iconify-icon class="h-5 w-5 animate-spin" icon="mingcute:loading-fill"></iconify-icon>
				{:else}
					Proceed to payment
				{/if}
			</button>
		</div>
	</form>
</section>
