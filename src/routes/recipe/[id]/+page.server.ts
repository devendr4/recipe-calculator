import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	// if (params.id === '1') {
	return {
		recipe: {
			id: 1,
			title: 'Red Velvet',
			img: 'https://assets.elgourmet.com/wp-content/uploads/2023/03/red-v_kvUtb7ixJqMHo63e5OnXWyjZsfV2zP-1024x683.png.webp',
			ingredients: [
				{ name: 'Chocolate', amount: 200, measurementUnit: 'g', price: 15 },
				{ name: 'Chocolate', amount: 200, measurementUnit: 'g', price: 10 },
				{ name: 'Chocolate', amount: 200, measurementUnit: 'g', price: 10 },
				{ name: 'Chocolate', amount: 200, measurementUnit: 'g', price: 10 },
				{ name: 'Chocolate', amount: 200, measurementUnit: 'g', price: 10 },
				{ name: 'Chocolate', amount: 200, measurementUnit: 'g', price: 10 }
			]
		}
	};
	// }

	error(404, 'Not found');
};
