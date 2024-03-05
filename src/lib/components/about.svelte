<section id="about">
	<div
		class="container mx-auto my-20 flex flex-col-reverse gap-x-20 bg-[#0B0A26] px-5 text-white md:grid md:grid-cols-5 md:px-10"
	>
		<div
			class="relative items-center justify-center space-y-10 pb-10 md:col-span-3 md:flex md:gap-10 md:pb-0"
		>
			<div class="spotlight"></div>
			<div class="space-y-10 md:space-y-20">
				<div class="space-y-3">
					<h3 class="text-4xl text-accent">100+</h3>
					<p class="text-sm">Students nationwide</p>
				</div>
				<div class="space-y-3">
					<h3 class="text-4xl">Qualified</h3>
					<p class="text-sm">Tutors</p>
				</div>
			</div>
			<img src="about-line.png" alt="About line" class="hidden h-[70%] md:block" />
			<div class="space-y-10 md:space-y-20">
				<div class="space-y-3">
					<h3 class="text-4xl">Comprehensive</h3>
					<p class="text-sm">Courses</p>
				</div>
				<div class="space-y-3">
					<h3 class="text-4xl text-accent">Flexible</h3>
					<p class="text-sm">Tuition plan</p>
				</div>
			</div>
		</div>
		<div
			class="mt-10 flex flex-col justify-center space-y-5 text-sm leading-6 md:col-span-2 md:mt-0"
		>
			<h2 class="text-sm font-semibold uppercase text-accent">About Us</h2>
			<p>
				Cooversa is a revolutionary software development education program designed to bridge the
				gap between aspiring developers and rewarding careers in the tech industry. We believe
				everyone deserves the opportunity to acquire in-demand coding skills, regardless of
				financial background.
			</p>
			<p>
				At Cooversa, we are passionate about creating a more accessible and inclusive path to
				software development careers. We empower individuals from all walks of life with the tools
				and knowledge they need to thrive in the ever-evolving tech industry.
			</p>
		</div>
	</div>
</section>

<style>
	#about {
		background-color: #0b0a26;
		/* background-image: url('/about-background.png') no-repeat; */
		background-size: cover;
		/* background-position: center;  */
	}

	.spotlight {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/spot.png');
		background-size: cover;
		background-position: center;
		opacity: 0.2;
		background-blend-mode: multiply;
		background-image: linear-gradient(
			to right,
			rgba(0, 0, 0, 0) 0%,
			#0b0a26 25%,
			#0b0a26 75%,
			rgba(0, 0, 0, 0) 100%
		);
	}
</style>
