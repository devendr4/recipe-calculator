<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { Button } from '$lib/components/ui/button';
	import IngredientPicker from '$lib/components/IngredientPicker.svelte';
	import { Input } from '$lib/components/ui/input';
	import Title from '$lib/components/Title.svelte';
	import type { Ingredient } from '../../../types';
	import IngredientList from '$lib/components/IngredientList.svelte';
	let { data } = $props();
	const { form, enhance } = superForm(data.form);
	function addIngredient(ingredient: Ingredient) {
		$form.ingredients = [...$form.ingredients, ingredient];
	}
</script>

<Title variant="h1">Nueva receta</Title>
<form class="flex flex-col gap-2" method="post" use:enhance>
	<Input placeholder="Titulo" name="title" bind:value={$form.title} />
	<Input type="file" value={''} name="img" />
	<div class="mt-2">
		<Title variant="h3">Ingredientes</Title>
		<IngredientList recipeIngredients={$form.ingredients} />
		<IngredientPicker {addIngredient} />
		<div class="w-1/2 flex flex-col gap-2 justify-between mt-2"></div>
	</div>
	<Button class="bg-purple-600">Guardar</Button>
</form>
