<script lang="ts">
	import type { Snippet } from 'svelte';

	let { onclick, children }: { onclick: () => void; children: Snippet } = $props();
</script>

<button class="bg-purple-400 p-2 rounded-md font-bold" {onclick}>
	{@render children()}
</button>
