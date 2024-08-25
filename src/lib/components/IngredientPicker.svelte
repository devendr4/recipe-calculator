<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	const ingredients = [
		{ value: 'sugar', label: 'Azucar' },
		{ value: 'flour', label: 'Harina' },
		{ value: 'egg', label: 'Huevos' },
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'pineapple', label: 'Piña' }
	];
	let selectedIngredient = { value: 'flour', label: 'Harina' };
	let ingredientData = $state<{ ingredient: string; unit: string }>({ ingredient: '', unit: '' });
	let { ingredientList }: { ingredientList: [] } = $props();

	const units = [
		{ value: 'kg', label: 'Kilos' },
		{ value: 'g', label: 'Gramos' },
		{ value: 'l', label: 'Litros' },
		{ value: 'unidad', label: 'Unidad' }
	];
</script>

<div class="flex items-center gap-2">
	<div class="flex flex-wrap">
		<Select.Root
			portal={null}
			onSelectedChange={(v) => {
				if (v) ingredientData.ingredient = v.value;
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
						<Select.Item value={ingredient.value} label={ingredient.label}
							>{ingredient.label}</Select.Item
						>
					{/each}
				</Select.Group>
			</Select.Content>
			<Select.Input name="favoriteFruit" />
		</Select.Root>
		<Select.Root
			portal={null}
			selected={selectedIngredient}
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
						<Select.Item value={unit.value} label={unit.label}>{unit.label}</Select.Item>
					{/each}
				</Select.Group>
			</Select.Content>
			<Select.Input name="favoriteFruit" />
		</Select.Root>
		<Input placeholder="Cantidad" class="w-1/2" type="number" />
	</div>
	<Button
		class="bg-purple-700"
		onclick={() => {
			ingredientList.push(selectedIngredient);
		}}>+</Button
	>
</div>
