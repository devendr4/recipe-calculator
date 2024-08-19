<script lang="ts">
	let displayPrice: boolean = $state(false);
	let { data } = $props();
</script>

{#if data?.recipe}
	<div class="flex flex-col gap-4">
		<h1 class="text-4xl text-center">{data.recipe.title}</h1>
		<img class="object-cover" src={data.recipe.img} alt={data.recipe.title} />
		<span class="flex justify-between">
			<h3>Ingredientes:</h3>
			<button
				class="font-bold bg-purple-400 p-2 rounded-md"
				onclick={() => (displayPrice = !displayPrice)}
				>Ver {displayPrice ? 'precios' : 'medidas'}</button
			>
		</span>
		<ul class="flex gap-4 flex-col">
			{#each data.recipe.ingredients as { name, price, amount, measurementUnit }}
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
			<p>{data.recipe.ingredients.map((i) => i.price).reduce((a, b) => a + b, 0)}$</p>
		</span>
	</div>
{/if}
