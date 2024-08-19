<script lang="ts">
	let { data } = $props();
</script>

<h1 class="text-4xl text-center">Lista de recetas</h1>

<ul>
	{#each data.recipes as recipe}
		<li>
			<div>
				<img src={recipe.img} alt={recipe.title} />
				<h3>
					{recipe.title}
				</h3>
			</div>
		</li>
	{/each}
</ul>
