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
	amount: number;
	unit: string;
}
