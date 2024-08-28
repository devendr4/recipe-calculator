<script lang="ts">
	import type { Ingredient } from '../../types';
	import { ingredients } from '../../types';
	import DottedLine from './DottedLine.svelte';

	let { recipeIngredients }: { recipeIngredients: Ingredient[] } = $props();
</script>

{#each recipeIngredients as i}
	<div class="flex justify-between">
		<p>{ingredients.find((v) => v.value === i.name)?.label}</p>

		<DottedLine />
		<span class="flex">
			<p>{i.amount}</p>
			{#if i.unit !== 'unidad'}
				<p>{i.unit}</p>
			{/if}
		</span>
	</div>
{/each}
