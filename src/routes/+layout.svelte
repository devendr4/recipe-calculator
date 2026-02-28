<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.css';
</script>

<Toaster />
<div class="bg-purple-50 min-h-screen w-full pb-24 px-5 pt-6 max-w-lg mx-auto">
	<slot />
</div>

<Navbar />
