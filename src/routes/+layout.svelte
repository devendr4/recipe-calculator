<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<div class="bg-purple-300 p-8 h-full min-h-screen w-full mb-8">
	<slot />
</div>

<Navbar />
