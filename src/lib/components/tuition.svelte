<section
	class="container mx-auto my-20 flex items-center justify-between gap-20 px-5 md:px-10"
	id="tuition"
>
	<div class="w-full space-y-5 md:w-1/2">
		<h2 class="text-sm font-semibold uppercase text-[#22C55E]">Tuition</h2>

		<div class="space-y-2">
			<h3 class="text-2xl font-semibold leading-relaxed lg:text-3xl">
				Launch Your Career, Pay Later
			</h3>
			<p class="mt-3 text-sm leading-relaxed">
				Here's how our innovative tuition model empowers you to focus on learning and get rewarded
				later:
			</p>
		</div>

		<div class="step">
			<div class="step-header">
				<p class="step-no">1</p>
				<h4 class="step-title">Apply and Get Accepted</h4>
			</div>
			<div class="step-content">
				<p class="step-description">
					Pay a one-time application fee of 10k Naira to kickstart your coding journey.
				</p>
			</div>
		</div>

		<div class="step">
			<div class="step-header">
				<p class="step-no">2</p>
				<h4 class="step-title">Tuition-Free Learning</h4>
			</div>
			<div class="step-content">
				<p class="step-description">
					Gain access to our comprehensive curriculum, foundational course, home study kit, and
					online resources – all without upfront tuition costs.
				</p>
			</div>
		</div>

		<div class="step">
			<div class="step-header">
				<p class="step-no">3</p>
				<h4 class="step-title">Pay When You Land a High-Paying Job</h4>
			</div>
			<div class="step-content">
				<p class="step-description">
					Once you secure a job that pays 250k Naira monthly or more, you'll have flexible repayment
					options for the program fee of 300k Naira.
				</p>
			</div>
		</div>

		<div class="step">
			<div class="step-header">
				<p class="step-no">4</p>
				<h4 class="step-title">Choose Your Repayment Plan</h4>
			</div>
			<div class="step-content">
				<ul class="step-description space-y-3">
					<li>
						<b>One-Time Payment:</b> Pay the full program fee of 300k Naira at once.
					</li>
					<li>
						<b>Monthly Installments:</b> Spread your program fee over 10 months with a monthly payment
						of 30k Naira.
					</li>
					<li>
						<b>Faster Installments:</b> Opt for a shorter repayment period of 5 months with a monthly
						payment of 60k Naira.
					</li>
				</ul>
			</div>
		</div>

		<!-- CTA -->
		<div class="pt-5">
			<a href="/apply" class="h-[55px] rounded-button bg-primary px-5 py-3 text-sm text-white"
				>Apply Now</a
			>
		</div>
	</div>

	<div class="hidden w-full overflow-hidden rounded-button md:block md:w-1/2">
		<img src="tuition.jpg" alt="Guy pressing his laptop" class="w-full" />
	</div>
</section>

<style>
	.step {
		display: flex;
		flex-direction: column;
	}

	.step-header {
		display: flex;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.step-no {
		background-color: transparent;
		color: #22c55e;
		font-size: 1.5rem;
		font-weight: 600;
		height: auto;
		line-height: 1;
		text-align: left;
		width: auto;
	}

	.step-title {
		font-size: 1rem;
		font-weight: 600;
		margin-left: 1rem;
	}

	.step-content {
		flex: 1;
		font-size: 0.875rem;
		line-height: 1.5;
		margin-top: 0.5rem;
		/* margin-left: 3rem; */
	}

	ul.step-description {
		/* Add a dot before each list item */
		list-style-type: disc;
		padding-left: 1.5rem;
	}

	@media (min-width: 1024px) {
		.step-title {
			font-size: 1.125rem;
		}
	}
</style>
