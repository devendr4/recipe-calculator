export interface Recipe {
	id: number;
	title: string;
	img: string;
	ingredients: Ingredients[];
}

export interface Ingredients {
	name: string;
	price: number;
	amount: number;
	measurementUnit: string;
}
