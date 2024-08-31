import { z } from 'zod';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

const ingredientSchema = z.object({
	id: z.number().optional(),
	name: z.string().min(2, { message: 'Debe ingresar un nombre' }),
	// price: z.number(),
	amount: z.number(),
	unit: z.string()
});

const recipeSchema = z.object({
	// id: z.string().optional(),
	title: z.string().min(2, { message: 'Debe ingresar un titulo' }),
	image: z
		.instanceof(File, { message: 'Seleccione una foto' })
		.refine((f) => f.size < 100_000, 'Max 100 kB upload size.'),
	ingredients: z.array(ingredientSchema).min(2, { message: 'Debe escoger al menos 2 ingredientes' })
});

export const load = async (event) => {
	const form = await superValidate(event, zod(recipeSchema), { errors: false });

	return { form };
};

export const actions = {
	default: async ({ request }) => {
		try {
			const form = await superValidate(request, zod(recipeSchema));
			if (!form.valid) {
				return fail(400, {
					form
				});
			}
			console.log(form.data);
		} catch (e) {
			console.log(e);
		}
		// const form = await superValidate(request, zod(recipeSchema));
	}
};
