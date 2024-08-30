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
	{ value: 'sugar', label: 'Azucar glass' },
	{ value: 'flour', label: 'Harina' },
	{ value: 'egg', label: 'Huevo' },
	{ value: 'cherry', label: 'Cereza' },
	{ value: 'vanilla', label: 'Vainilla' },
	{ value: 'baking_powder', label: 'Polvo de hornear' },
	{ value: 'cream_cheese', label: 'Queso crema' },
	{ value: 'carrot', label: 'Zanahoria' },
	{ value: 'coconut', label: 'Coco' },
	{ value: 'passion_fruit', label: 'Parchita' },
	{ value: 'cuajada', label: 'Cuajada' },
	{ value: 'cornstarch', label: 'Maizena' },
	{ value: 'orange', label: 'Naranja' },
	{ value: 'cocoa', label: 'Cacao' },
	{ value: 'egg', label: 'Chocolate cobertura oscuro' },
	{ value: 'egg', label: 'Chocolate cobertura blanco' },
	{ value: 'egg', label: 'Bicarbonato' },
	{ value: 'cinnamon', label: 'Canela' },
	{ value: 'egg', label: 'Nuez moscada' },
	{ value: 'egg', label: 'Clavitos' },
	{ value: 'pineapple_essence', label: 'Escencia de pina' },
	{ value: 'vanilla_essence', label: 'Escencia de vainilla' },
	{ value: 'lemon_essence', label: 'Escencia de limon' },
	{ value: 'red_powdered_dye', label: 'Colorante en polvo (rojo)' },
	{ value: 'red_liquid_dye', label: 'Colorante liquido (rojo)' },
	{ value: 'yellow_powdered_dye', label: 'Colorante liquido (amarillo)' },
	{ value: 'powdered_milk', label: 'Leche en polvo' },
	{ value: 'pineapple', label: 'Piña' },
	{ value: 'dome1', label: 'Domo (28)' },
	{ value: 'dome2', label: 'Domo (25)' },
	{ value: 'box1', label: 'Caja (30x30x14)' },
	{ value: 'box2', label: 'Caja (25x25x12)' },
	{ value: 'butter', label: 'Mantequilla' },
	{ value: 'margarine', label: 'Margarina' }
];

export const units = [
	{ value: 'default', label: 'Unidades' },
	{ value: 'kg', label: 'kilos' },
	{ value: 'g', label: 'gramos' },
	{ value: 'l', label: 'litros' },
	{ value: 'unidad', label: 'unidad' }
];
