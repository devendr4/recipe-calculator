<script lang="ts">
	import type { Ingredient } from '../../types';
	import { ingredients, units } from '../../types';
	import DottedLine from './DottedLine.svelte';

	let { recipeIngredients }: { recipeIngredients: Ingredient[] } = $props();
</script>

{#each recipeIngredients as i}
	<div class="flex justify-between">
		<p>{ingredients.find((v) => v.value === i.name)?.label}</p>

		<DottedLine />
		<span class="flex gap-1">
			<p>{i.amount}</p>
			{#if i.unit !== 'unidad'}
				<p>{units.find((v) => v.value === i.unit)?.label}</p>
			{/if}
		</span>
	</div>
{/each}
