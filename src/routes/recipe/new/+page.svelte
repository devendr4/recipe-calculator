<script lang="ts">
	import { fileProxy, superForm } from 'sveltekit-superforms';
	import { Button } from '$lib/components/ui/button';
	import IngredientPicker from '$lib/components/IngredientPicker.svelte';
	import { Input } from '$lib/components/ui/input';
	import Title from '$lib/components/Title.svelte';
	import type { Ingredient } from '../../../types';
	import IngredientList from '$lib/components/IngredientList.svelte';
	import Error from '$lib/components/Error.svelte';
	import { redirect } from '@sveltejs/kit';
	let { data } = $props();
	let preview = $state('');
	const { form, enhance, errors } = superForm(data.form, {
		dataType: 'json',

		onResult: async ({ result }) => {
			if (result.type == 'success') {
			}
		}
	});
	function addIngredient(ingredient: Ingredient) {
		$form.ingredients = [...$form.ingredients, ingredient];
	}

	const file = fileProxy(form, 'image');
	const handleImageChange = () => {
		if ($file.length) {
			preview = URL.createObjectURL($file[0]);
		}
	};
</script>

<Title variant="h1">Nueva receta</Title>
<form class="flex flex-col gap-2 mt-4" method="POST" enctype="multipart/form-data" use:enhance>
	<Input placeholder="Titulo" name="title" bind:value={$form.title} />
	<input hidden name="image" bind:value={$form.image} />
	<input hidden name="ingredients" bind:value={$form.ingredients} />
	{#if $errors.title}<Error>{$errors.title}</Error>{/if}
	<label for="file" class="bg-purple-600 text-white text-center rounded p-2"
		>Seleccione imagen</label
	>
	<input
		id="file"
		class="hidden"
		accept="image/png, image/jpeg"
		placeholder="Escoja una imagen"
		type="file"
		name="img"
		bind:files={$file}
		onchange={handleImageChange}
	/>

	{#if preview}
		<img src={preview} alt={$form.title} />
	{/if}

	{#if $errors.image}<Error>{$errors.image}</Error>{/if}
	<div class="mt-2">
		<Title variant="h3">Ingredientes</Title>
		<IngredientList recipeIngredients={$form.ingredients} />
		<IngredientPicker {addIngredient} />

		{#if $errors.ingredients}<Error>{$errors.ingredients._errors[0]}</Error>{/if}
		<div class="w-1/2 flex flex-col gap-2 justify-between mt-2"></div>
	</div>
	<Button class="bg-purple-600" type="submit">Guardar</Button>
</form>
