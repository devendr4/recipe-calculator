import { error } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

const ingredientSchema = z.object({
	id: z.number().optional(),
	name: z.string().min(2),
	// price: z.number(),
	amount: z.number(),
	unit: z.string()
});

const recipeSchema = z.object({
	id: z.string().optional(),
	title: z.string().min(2),
	image: z.string().min(2),
	ingredients: z.array(ingredientSchema),
	avatar: z.string().url()
});

export const load = async (event) => {
	const form = await superValidate(event, zod(recipeSchema), { errors: false });

	return { form };
};
