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
	{ value: 'sugar', label: 'Azucar' },
	{ value: 'flour', label: 'Harina' },
	{ value: 'egg', label: 'Huevos' },
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'pineapple', label: 'Piña' }
];
