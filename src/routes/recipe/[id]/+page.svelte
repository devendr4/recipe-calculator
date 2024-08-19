<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from '../$types';
	import type { Recipe } from '../../../types';

	let displayPrice: boolean = $state(false);
	let data: PageData;
	let recipe: Recipe | undefined = $state();

	onMount(() => {
		console.log('mounting', data);
		recipe = data;
	});
</script>

{#if data}
	<div class="flex flex-col gap-4">
		<h1 class="text-4xl text-center">{recipe.title}</h1>
		<img class="object-cover" src={recipe.img} alt={recipe.title} />
		<span class="flex justify-between">
			<h3>Ingredientes:</h3>
			<button
				class="font-bold bg-purple-400 p-2 rounded-md"
				onclick={() => (displayPrice = !displayPrice)}
				>Ver {displayPrice ? 'precios' : 'medidas'}</button
			>
		</span>
		<ul class="flex gap-4 flex-col">
			{#each recipe.ingredients as { name, price, amount, measurementUnit }}
				<li class="flex justify-between">
					<span>
						{name}
					</span>
					<div class="w-full border-t border-gray-700 border-dotted my-4 mx-3"></div>

					<span>
						{#if displayPrice}
							<p>
								{amount + measurementUnit}
							</p>
						{:else}
							<p>
								{price + '$'}
							</p>
						{/if}
					</span>
				</li>
			{/each}
		</ul>
		<span class="flex justify-between -mt-2">
			<p class="font-bold">Total:</p>

			<div class="w-full border-t border-gray-700 border-dotted my-4 mx-3"></div>
			<p>{recipe.ingredients.map((i) => i.price).reduce((a, b) => a + b, 0)}$</p>
		</span>
	</div>
{/if}
