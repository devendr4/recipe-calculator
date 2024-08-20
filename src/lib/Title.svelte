<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, variant = 'h1' }: { children: Snippet; variant: 'h1' | 'h2' | 'h3' | 'h4' } =
		$props();
</script>

{#if variant === 'h1'}
	<h1 class="text-3xl text-center font-bold uppercase tracking-wider">
		{@render children()}
	</h1>
{:else if variant === 'h2'}
	<h2 class="text-2xl text-center font-bold uppercase tracking-wider">
		{@render children()}
	</h2>
{:else if variant === 'h3'}
	<h3 class="text-center font-bold uppercase tracking-wider">
		{@render children()}
	</h3>
{:else if variant === 'h4'}
	<h3 class="text-sm text-center font-bold uppercase tracking-wider">
		{@render children()}
	</h3>
{:else}{/if}
