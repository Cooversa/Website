<script lang="ts">
	import { page } from '$app/stores';

	const firstName = $page.url.searchParams.get('firstName');
</script>

<svelte:head>
	<title>Application Successful | Cooversa</title>
</svelte:head>

<div
	class="container mx-auto flex flex-col items-center justify-center px-5 py-10 md:px-10 md:py-20"
>
	<div>
		<iconify-icon icon="ion:rocket-outline" width="64" height="64" class="text-[#22C55E]"
		></iconify-icon>
	</div>
	<div class="mx-auto mt-10 max-w-2xl">
		<h2 class="text-xl font-semibold md:text-2xl">
			Congratulations, {firstName}! You've taken the first step towards your tech career.
		</h2>
		<div class="mx-auto mt-10 max-w-2xl space-y-5 text-sm">
			<p>
				Thank you for your interest in the Cooversa program, {firstName}! We appreciate you
				submitting your application and sharing your information with us.
			</p>
			<h3 class="font-semibold">Here's what to expect next:</h3>
			<ul style="list-style-type: disc; padding-left: 1.5rem;" class="space-y-3">
				<li>
					Within 24 hours, you'll receive a confirmation email from us at your email address
					acknowledging your application.
				</li>
				<li>
					Within 3 - 7 business days, you'll receive another email with access to your home study
					materials and a link to join the vibrant Cooversa community. This community will connect
					you with other aspiring developers and provide valuable support throughout your journey.
				</li>
			</ul>
			<p>
				While you wait, explore our website! Learn more about our curriculum, success stories, and
				what makes Cooversa unique. You should also follow us on social media to stay updated on the
				latest news and tips:
			</p>
			<ul style="list-style-type: disc; padding-left: 1.5rem;" class="space-y-3">
				<li><a href="/" class="underline hover:text-primary">Explore our website</a></li>
				<li>
					<a href="https://x.com/CooversaHQ" target="_blank" class="underline hover:text-primary"
						>Follow us on X (formerly Twitter)</a
					>
				</li>
				<li>
					<a
						href="https://instagram.com/cooversa"
						target="_blank"
						class="underline hover:text-primary">Follow us on Instagram</a
					>
				</li>
			</ul>
		</div>
	</div>
</div>
