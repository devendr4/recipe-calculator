export interface Recipe {
	id: number;
	title: string;
	img: string;
	ingredients: Ingredient[];
}

export interface Ingredient {
	id?: number;
	name: string;
	price?: number;
	amount?: number;
	unit: string;
}

export const ingredients = [
	{ value: 'default', label: 'Ingredientes' },
	{ value: 'sugar', label: 'Azucar' },
	{ value: 'flour', label: 'Harina' },
	{ value: 'egg', label: 'Huevos' },
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'pineapple', label: 'Piña' }
];

export const units = [
	{ value: 'default', label: 'Unidades' },
	{ value: 'kg', label: 'Kilos' },
	{ value: 'g', label: 'Gramos' },
	{ value: 'l', label: 'Litros' },
	{ value: 'unidad', label: 'Unidad' }
];
