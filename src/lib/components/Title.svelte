<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		variant = 'h1'
	}: { class?: string; children: Snippet; variant: 'h1' | 'h2' | 'h3' | 'h4' } = $props();
</script>

{#if variant === 'h1'}
	<h1 class="text-2xl font-bold tracking-tight text-gray-900">
		{@render children()}
	</h1>
{:else if variant === 'h2'}
	<h2 class="text-xl font-bold tracking-tight text-gray-900">
		{@render children()}
	</h2>
{:else if variant === 'h3'}
	<h3 class="text-base font-semibold text-gray-800">
		{@render children()}
	</h3>
{:else if variant === 'h4'}
	<h4 class="text-sm font-semibold text-gray-700">
		{@render children()}
	</h4>
{:else}{/if}
