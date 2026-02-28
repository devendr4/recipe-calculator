<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Title from '$lib/components/Title.svelte';
	import DottedLine from '$lib/components/DottedLine.svelte';

	let displayPrice: boolean = $state(false);
	let { data } = $props();
</script>

{#if data?.recipe}
	<div class="flex flex-col gap-4">
		<span class="flex justify-between items-center">
			<Title variant="h1">{data.recipe.title}</Title>
			<Button onclick={() => {}}>Editar</Button>
		</span>

		<img class="w-full rounded-2xl object-cover max-h-64" src={data.recipe.img} alt={data.recipe.title} />

		<div class="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3">
			<div class="flex items-center justify-between">
				<h3 class="font-semibold text-gray-700">Ingredientes</h3>
				<Button onclick={() => (displayPrice = !displayPrice)}>
					Ver {displayPrice ? 'medidas' : 'precios'}
				</Button>
			</div>

			<ul class="flex flex-col divide-y divide-gray-100">
				{#each data.recipe.ingredients as { name, price, amount, measurementUnit }}
					<li class="flex justify-between items-center py-2">
						<span class="text-gray-700">{name}</span>
						<DottedLine />
						<span class="font-medium text-gray-800 text-right">
							{#if displayPrice}
								{amount + measurementUnit}
							{:else}
								{'$' + price}
							{/if}
						</span>
					</li>
				{/each}
			</ul>

			<div class="border-t border-gray-200 pt-3 flex justify-between items-center">
				<span class="font-bold text-gray-800">Total</span>
				<DottedLine />
				<span class="font-bold text-purple-600 text-lg">
					${data.recipe.ingredients.map((i) => i.price).reduce((a, b) => a + b, 0)}
				</span>
			</div>
		</div>
	</div>
{/if}
