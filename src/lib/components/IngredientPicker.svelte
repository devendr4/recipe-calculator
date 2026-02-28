<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import type { Ingredient } from '../../types';
	import { ingredients, units } from '../../types';
	import { toast } from 'svelte-sonner';

	let ingredientData = $state<Ingredient>({ name: '', unit: '', price: 0 });
	let { addIngredient }: { addIngredient: (ingredient: Ingredient) => void } = $props();

	let searchQuery = $state('');
	let showDropdown = $state(false);

	let filteredIngredients = $derived(
		ingredients.filter(
			(v) =>
				v.value !== 'default' &&
				v.label.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	let selectedUnit = $derived(
		ingredientData?.unit && ingredientData.unit !== 'default'
			? {
					label: units.filter((v) => v.value == ingredientData.unit)[0].label,
					value: ingredientData.unit
				}
			: undefined
	);

	function selectIngredient(ingredient: { value: string; label: string }) {
		ingredientData.name = ingredient.value;
		searchQuery = ingredient.label;
		showDropdown = false;
	}
</script>

<div class="flex items-end gap-2">
	<div class="flex flex-col gap-2 flex-1">
		<div class="relative">
			<Input
				placeholder="Ingrediente"
				bind:value={searchQuery}
				onfocus={() => (showDropdown = true)}
				onblur={() => setTimeout(() => (showDropdown = false), 150)}
				oninput={() => {
					showDropdown = true;
					ingredientData.name = '';
				}}
			/>
			{#if showDropdown && filteredIngredients.length > 0}
				<ul class="absolute z-50 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-1 max-h-48 overflow-y-auto">
					{#each filteredIngredients as ingredient}
						<li>
							<button
								type="button"
								class="w-full text-left px-3 py-2 text-sm hover:bg-purple-50 hover:text-purple-700 transition-colors"
								onmousedown={() => selectIngredient(ingredient)}
							>
								{ingredient.label}
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>

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
		class="bg-purple-700 mb-px"
		onclick={() => {
			if (ingredientData?.name && ingredientData?.unit && ingredientData?.amount) {
				addIngredient(ingredientData);
				ingredientData = { name: '', unit: '', price: 0 };
				searchQuery = '';
			} else {
				toast.error('Error, introduzca ingrediente');
			}
		}}>+</Button
	>
</div>
