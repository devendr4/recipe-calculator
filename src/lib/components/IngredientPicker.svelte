<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import type { Ingredient } from '../../types';
	import { ingredients, units } from '../../types';
	import { toast } from 'svelte-sonner';

	let ingredientData = $state<Ingredient>({ name: '', unit: '', price: 0 });
	let { addIngredient }: { addIngredient: (ingredient: Ingredient) => void } = $props();
	let ingredientsList = $state([]);
	let selectedIngredient = $derived(
		ingredientData?.name
			? {
					label: ingredients.filter((v) => v.value == ingredientData.name)[0].label,
					value: ingredientData.name
				}
			: undefined
	);

	let selectedUnit = $derived(
		ingredientData?.unit
			? {
					label: units.filter((v) => v.value == ingredientData.unit)[0].label,
					value: ingredientData.unit
				}
			: undefined
	);
</script>

<div class="flex items-center gap-2">
	{#each ingredientsList as ing}
		<p>{ing}</p>
	{/each}
	<div class="flex flex-wrap gap-2">
		<Select.Root
			portal={null}
			onSelectedChange={(v) => {
				if (v) {
					ingredientData.name = v.value;
				}
			}}
			selected={selectedIngredient}
		>
			<Select.Trigger class="w-full">
				<Select.Value placeholder="Ingrediente" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>Ingredientes</Select.Label>
					{#each ingredients as ingredient}
						{#if ingredient.value !== 'default'}
							<Select.Item value={ingredient.value} label={ingredient.label}
								>{ingredient.label}</Select.Item
							>
						{/if}
					{/each}
				</Select.Group>
			</Select.Content>
		</Select.Root>
		<div class="flex gap-2">
			<Input
				placeholder="Cantidad"
				class="w-1/2"
				type="number"
				bind:value={ingredientData.amount}
			/>
			<Select.Root
				portal={null}
				selected={selectedUnit}
				onSelectedChange={(v) => {
					if (v) ingredientData.unit = v.value;
				}}
			>
				<Select.Trigger class="w-1/2">
					<Select.Value placeholder="Unidad" />
				</Select.Trigger>
				<Select.Content>
					<Select.Group>
						<Select.Label>Unidades</Select.Label>
						{#each units as unit}
							{#if unit.value !== 'default'}
								<Select.Item value={unit.value} label={unit.label}>{unit.label}</Select.Item>
							{/if}
						{/each}
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</div>
	</div>
	<Button
		class="bg-purple-700"
		onclick={() => {
			if (ingredientData?.name && ingredientData?.unit && ingredientData?.amount) {
				addIngredient(ingredientData);
				ingredientData = { name: 'default', unit: 'default', price: 0 };
			} else {
				toast.error('Error, introduzca ingrediente');
			}
		}}>+</Button
	>
</div>
