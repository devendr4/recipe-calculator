<script lang="ts">
	import Title from '$lib/Title.svelte';

	let { data } = $props();
</script>

<Title variant="h1">Lista de recetas</Title>

<ul class="flex flex-col gap-4">
	{#each data.recipes as recipe}
		<li class="flex items-center justify-around border-b border-gray-700 p-4 -mx-8">
			<a href={`/recipe/${recipe.id}`}>
				<img height="auto" width="150" src={recipe.img} alt={recipe.title} />
			</a>
			<div class="flex flex-col items-center">
				<Title variant="h4">
					{recipe.title}
				</Title>
				<Title variant="h3">${recipe.price}</Title>
			</div>
		</li>
	{/each}
</ul>
