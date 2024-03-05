<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let navOpen = false;

	const toggleNav = () => {
		navOpen = !navOpen;
	};

	onMount(() => {
		const nav = document.getElementById('nav');

		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				document.getElementById('nav')?.classList.add('shadow-md');
			} else {
				document.getElementById('nav')?.classList.remove('shadow-md');
			}
		});

		let prevScrollpos = window.scrollY;
		window.addEventListener('scroll', () => {
			let currentScrollPos = window.scrollY;

			if (prevScrollpos > currentScrollPos) {
				if (nav) {
					nav.style.transform = 'translateY(0)';
				}
			} else {
				let shouldHide = currentScrollPos > 150;
				if (shouldHide) {
					if (nav) {
						nav.style.transform = 'translateY(-100%)';
					}
				}
			}

			prevScrollpos = currentScrollPos;
		});
	});
</script>

<div id="nav" class="fixed z-50 w-screen border-b bg-white">
	<div class="container mx-auto flex items-center justify-between p-5">
		<div>
			<a href="/">
				<img src="/logo-coloured.svg" alt="Cooversa logo" class="w-[96px]" />
			</a>
		</div>

		<div class="hidden items-center space-x-5 md:flex">
			<a href="#about" class="nav-item">About us</a>
			<a href="#tuition" class="nav-item">Tuition</a>
			<a href="#faqs" class="nav-item">FAQs</a>
			<a href="#contact" class="nav-item">Contact</a>
			<a
				href="/apply"
				class="mr-10 rounded-button bg-primary px-5 py-3 text-[0.9rem] text-white hover:bg-primary/85"
			>
				Apply now
			</a>
		</div>

		<div class="md:hidden">
			<button on:click={toggleNav}>
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
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</button>
		</div>
	</div>
</div>

{#if navOpen}
	<div
		in:slide={{
			axis: 'x',
			duration: 300,
			delay: 0,
			easing: cubicOut
		}}
		out:slide={{
			axis: 'x',
			duration: 300,
			delay: 600,
			easing: cubicOut
		}}
		class="fixed top-0 z-50 flex h-screen w-screen items-center bg-[#0B0A26] text-white md:hidden"
	>
		<!-- Close Button -->
		<div class="absolute right-5 top-5">
			<button on:click={toggleNav}>
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
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>

		<div class="flex w-full flex-col items-center space-y-10 px-5">
			<a
				in:slide={{
					axis: 'y',
					delay: 300,
					duration: 300,
					easing: cubicOut
				}}
				out:slide={{
					axis: 'y',
					duration: 200,
					delay: 0,
					easing: cubicOut
				}}
				on:click={toggleNav}
				href="#about"
				class="nav-item-mobile"
				>About us
			</a>
			<a
				in:slide={{
					axis: 'y',
					delay: 400,
					duration: 300,
					easing: cubicOut
				}}
				out:slide={{
					axis: 'y',
					duration: 200,
					delay: 100,
					easing: cubicOut
				}}
				on:click={toggleNav}
				href="#tuition"
				class="nav-item-mobile">Tuition</a
			>
			<a
				in:slide={{
					axis: 'y',
					delay: 500,
					duration: 300,
					easing: cubicOut
				}}
				out:slide={{
					axis: 'y',
					duration: 200,
					delay: 200,
					easing: cubicOut
				}}
				on:click={toggleNav}
				href="#faqs"
				class="nav-item-mobile">FAQs</a
			>
			<a
				in:slide={{
					axis: 'y',
					delay: 600,
					duration: 300,
					easing: cubicOut
				}}
				out:slide={{
					axis: 'y',
					duration: 200,
					delay: 300,
					easing: cubicOut
				}}
				on:click={toggleNav}
				href="#contact"
				class="nav-item-mobile">Contact</a
			>
			<a
				in:slide={{
					axis: 'y',
					delay: 700,
					duration: 300,
					easing: cubicOut
				}}
				out:slide={{
					axis: 'y',
					duration: 200,
					delay: 400,
					easing: cubicOut
				}}
				on:click={toggleNav}
				href="/apply"
				class="nav-item-mobile flex items-center space-x-3"
				target="_blank"
			>
				<span>Apply now</span>
				<iconify-icon icon="ph:arrow-up-right-bold" class="h-full"></iconify-icon>
			</a>
		</div>
	</div>
{/if}

<style>
	#nav {
		transform: translateY(0);
		transition: transform 0.3s ease-in-out;
	}

	.nav-item {
		color: #000;
		font-size: 0.9rem;
		font-weight: 600;
	}
	.nav-item:hover {
		color: #5c57ff;
	}

	.nav-item-mobile {
		color: #fff;
		font-size: 1.5rem;
		font-weight: 500;
	}
</style>
