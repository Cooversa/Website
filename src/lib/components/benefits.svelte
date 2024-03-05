<section class="container mx-auto my-20 px-5">
	<div class="space-y-3 text-center">
		<h3 class="text-2xl leading-snug sm:text-3xl">Why choose Cooversa?</h3>
		<p class="text-sm">We make sure to provide an overall learning experience for our students</p>
	</div>
	<div class="benefits mt-16 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
		<div class="benefit-card">
			<iconify-icon icon="carbon:piggy-bank" class="icon"></iconify-icon>
			<h3 class="title">Pay When You Land a Job</h3>
			<p class="description">
				Focus on learning, not finances. Our innovative tuition-free model lets you pay back only
				after you secure a high-paying job (250k Naira or $300 monthly).
			</p>
		</div>
		<div class="benefit-card special">
			<iconify-icon icon="heroicons:user-group-20-solid" class="icon"></iconify-icon>
			<h3 class="title">Collaborative Learning</h3>
			<p class="description">
				Master teamwork and communication through peer programming and build a supportive network of
				fellow aspiring developers.
			</p>
		</div>
		<div class="benefit-card">
			<iconify-icon icon="ph:gear" class="icon middle"></iconify-icon>
			<h3 class="title">Practical Skill Development</h3>
			<p class="description">
				Learn by doing! Our curriculum emphasizes real-world projects to prepare you for the modern
				workplace.
			</p>
		</div>
		<div class="benefit-card">
			<iconify-icon icon="iconoir:light-bulb" class="icon"></iconify-icon>
			<h3 class="title">Expert Mentorship</h3>
			<p class="description">
				Benefit from the guidance and support of experienced software developers who will help you
				navigate your learning journey.
			</p>
		</div>
		<div class="benefit-card">
			<iconify-icon icon="ion:rocket" class="icon middle"></iconify-icon>
			<h3 class="title">Job Placement Assistance</h3>
			<p class="description">
				We equip you with the skills and resources to land a high-paying job after graduation. Get
				resume and portfolio guidance to stand out to employers.
			</p>
		</div>
		<div class="benefit-card">
			<iconify-icon icon="ph:globe-duotone" class="icon middle"></iconify-icon>
			<h3 class="title">Learn from Anywhere</h3>
			<p class="description">
				Our flexible program allows you to study remotely, at your own pace, from anywhere in the
				world.
			</p>
		</div>
	</div>
</section>

<style>
	.benefit-card {
		border: 1px solid #e5e7eb;
		border-radius: 4px;
		padding: 40px;
	}

	.benefit-card.special {
		background-color: #5c57ff;
		color: white;
	}

	.benefit-card .icon {
		font-size: 2rem;
		color: #22c55e;
	}

	.benefit-card.special .icon {
		color: #fed924;
	}

	.benefit-card .title {
		font-weight: 600;
		margin-top: 15px;
	}

	.benefit-card .description {
		margin-top: 10px;
		font-size: 0.875rem;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		.benefit-card {
			padding: 30px;
		}

		/* Clear special styles on mobile */
		.benefit-card.special {
			background-color: white;
			color: black;
		}
	}
</style>
