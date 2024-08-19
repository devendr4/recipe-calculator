<script lang="ts">
	let { data } = $props();
</script>

<h1 class="text-4xl text-center">Lista de recetas</h1>

<ul class="flex flex-col gap-4">
	{#each data.recipes as recipe}
		<li class="flex items-center justify-around">
			<a href={`/recipe/${recipe.id}`}>
				<img height="auto" width="150" src={recipe.img} alt={recipe.title} />
			</a>
			<h3>
				{recipe.title}
			</h3>
		</li>
	{/each}
</ul>
