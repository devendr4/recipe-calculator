<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.css';
</script>

<Toaster />
<div class="bg-purple-300 p-8 h-full min-h-screen w-full mb-8">
	<slot />
</div>

<Navbar />
