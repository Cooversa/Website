<script>
	import Navbar from '$lib/components/navbar.svelte';
	import '../styles/app.pcss';
	import '../styles/global.css';
	import 'iconify-icon';
	import { Toaster } from 'svelte-sonner';
</script>

<Toaster richColors />

<div class="relative flex min-h-screen flex-col text-foreground">
	<Navbar />
	<div class="flex-1 pt-[85px]">
		<slot />
	</div>
	<footer class="border-t-[0.5px] border-[#2b2a4d] bg-[#0B0A26] text-white">
		<div class="container mx-auto py-5 text-center">
			<p class="text-sm text-accent">&copy; 2021 Cooversa. All rights reserved.</p>
		</div>
	</footer>
</div>
