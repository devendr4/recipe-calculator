<script lang="ts">
	import Title from '$lib/components/Title.svelte';

	let { data } = $props();
</script>

<Title variant="h1">Mis Recetas</Title>

<ul class="flex flex-col gap-3 mt-6">
	{#each data.recipes as recipe}
		<li>
			<a
				href={`/recipe/${recipe.id}`}
				class="flex items-center gap-4 bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow"
			>
				<img
					height="80"
					width="80"
					class="rounded-xl object-cover w-20 h-20 flex-shrink-0"
					src={recipe.img}
					alt={recipe.title}
				/>
				<div class="flex flex-col gap-1">
					<span class="font-semibold text-gray-800">{recipe.title}</span>
					<span class="text-purple-600 font-bold">${recipe.price}</span>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-300 ml-auto flex-shrink-0">
					<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
				</svg>
			</a>
		</li>
	{/each}
</ul>
