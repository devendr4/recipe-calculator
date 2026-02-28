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

<form class="flex flex-col gap-4 mt-6" method="POST" enctype="multipart/form-data" use:enhance>
	<div class="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3">
		<Input placeholder="Título de la receta" name="title" bind:value={$form.title} />
		<input hidden name="image" bind:value={$form.image} />
		<input hidden name="ingredients" bind:value={$form.ingredients} />
		{#if $errors.title}<Error>{$errors.title}</Error>{/if}

		<label
			for="file"
			class="flex items-center justify-center gap-2 bg-purple-50 text-purple-700 border-2 border-dashed border-purple-300 rounded-xl p-4 cursor-pointer hover:bg-purple-100 transition-colors font-medium"
		>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
				<path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z" />
			</svg>
			Seleccionar imagen
		</label>
		<input
			id="file"
			class="hidden"
			accept="image/png, image/jpeg"
			type="file"
			name="img"
			bind:files={$file}
			onchange={handleImageChange}
		/>

		{#if preview}
			<img class="rounded-xl object-cover max-h-48 w-full" src={preview} alt={$form.title} />
		{/if}

		{#if $errors.image}<Error>{$errors.image}</Error>{/if}
	</div>

	<div class="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3">
		<h3 class="font-semibold text-gray-700">Ingredientes</h3>
		<IngredientList recipeIngredients={$form.ingredients} />
		<IngredientPicker {addIngredient} />
		{#if $errors.ingredients}<Error>{$errors.ingredients._errors[0]}</Error>{/if}
	</div>

	<Button class="bg-purple-600 hover:bg-purple-700 w-full" type="submit">Guardar receta</Button>
</form>
