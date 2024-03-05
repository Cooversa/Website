<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	const FAQs = [
		{
			id: 1,
			question: 'How long is the program?',
			answer:
				"The program is designed to be completed in 6 months, then you'll do a 1-month internship to gain practical experience. After that, you'll be ready to start your new career as a software developer."
		},
		{
			id: 2,
			question: 'What are the eligibility requirements?',
			html_answer: `
                <ul class="space-y-3">
                    <li><b>Age:</b> You must be at least 18 years old.</li>
                    <li><b>Education:</b> A minimum of a high school diploma (SSCE) or equivalent is required.</li>
                    <li><b>English Proficiency:</b> You should be able to read, write, and speak English fluently.</li>
                    <li><b>Laptop:</b> You need a laptop to participate in the program.</li>
                    <li><b>Internet Access:</b> You need a stable internet connection to participate in the program.</li>
                    <li><b>Computer Skills:</b> Basic computer skills are necessary, but no prior coding experience is required.</li>
                </ul>
            `
		},
		{
			id: 3,
			question: 'What is the application process like?',
			html_answer: `
                <ul class="space-y-3">
                    <li><b>Apply:</b> Submit your online application form and pay the one-time application fee of 10k Naira.</li>
                    <li><b>Prepare:</b> Once accepted, you'll gain access to our foundational course, home study kit, and the supportive Cooversa community. This will equip you with the basic skills and knowledge needed for the program.</li>
                    <li><b>Trials:</b> Put your learning into practice by collaborating with other students on 3 real-world projects. You'll receive valuable feedback from your peers to enhance your skills.</li>
                    <li><b>Assessment:</b> To gauge your readiness for the program's intensity, you'll take an assessment based on the foundational course material.</li>
                    <li><b>Acceptance:</b> Upon successfully completing the trials and assessment, you'll receive notification of your acceptance into the Cooversa program.</li>
                </ul>
            `
		},
		{
			id: 4,
			question: "What if I don't get accepted?",
			answer:
				"If you don't get accepted, you'll receive feedback on areas to improve and can reapply after 3 months."
		},
		{
			id: 5,
			question: 'What is the application fee?',
			answer:
				'The application fee is a one-time payment of 10k Naira. This fee covers the assessment process and grants you access to the foundational course and community resources once accepted.'
		},
		{
			id: 6,
			question: 'Do I need to pay any tuition fees upfront?',
			answer:
				'No, Cooversa operates on a tuition-free model. You only pay the program fee after you secure a high-paying job (250k Naira or $300 monthly).'
		},
		{
			id: 7,
			question: "What happens if I don't find a job within a specific timeframe?",
			answer:
				"Cooversa is committed to your success. We offer career support services and guidance to help you land a high-paying job. However, there's no additional fee or penalty if it takes longer than expected."
		},
		{
			id: 8,
			question: 'How much is the program fee?',
			answer:
				'The program fee is 300k Naira. You only pay this fee after you secure a high-paying job.'
		},
		{
			id: 9,
			question: 'What are the different repayment options?',
			html_answer: `
                <ul class="space-y-3">
                    <li><b>One-Time Payment:</b> Pay the full program fee of 300k Naira at once.</li>
                    <li><b>Monthly Installments:</b> Spread your fee over 10 months with a monthly payment of 30k Naira.</li>
                    <li><b>Faster Installments:</b> Opt for a shorter repayment period of 5 months with a monthly payment of 60k Naira.</li>
                </ul>
            `
		},
		{
			id: 10,
			question: 'When does the repayment period start?',
			answer:
				'The repayment period begins once you secure a qualifying job and receive your first salary of 250k Naira or $300 monthly.'
		}
	];

	let activeFAQ = 1;

	const switchFAQ = (id: number) => {
		activeFAQ = id;
	};
</script>

<div class="container mx-auto px-5 py-20" id="faqs">
	<h2 class="text-center text-3xl font-semibold">Frequently Asked Questions</h2>

	<div class="mt-10 space-y-10">
		{#each FAQs as { id, question, answer, html_answer }, i (id)}
			<button
				class="faq block w-full"
				on:click={() => switchFAQ(id)}
				class:active={activeFAQ === id}
			>
				<div class="flex items-center justify-between text-left">
					<h3 class="text-lg font-semibold">{question}</h3>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>

				{#if activeFAQ === id}
					<div class=" text-left">
						{#if html_answer}
							<div class="mt-5 text-sm">
								{@html html_answer}
							</div>
						{:else}
							<p class="mt-5 text-sm">{answer}</p>
						{/if}
					</div>
				{/if}
			</button>
		{/each}
	</div>
</div>

<style>
	.faq {
		padding: 1.5rem;
		border: 1px solid #e5e7eb;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.faq:hover {
		background-color: #f7f7f7;
	}

	.faq svg {
		transition: transform 0.3s ease;
	}

	.faq.active svg {
		transform: rotate(180deg);
	}

	.faq:hover svg {
		transform: rotate(180deg);
	}

	.faq p {
		color: #6b7280;
	}

	.faq h3 {
		color: #111827;
	}

	.faq h3:hover {
		text-decoration: underline;
	}
</style>
