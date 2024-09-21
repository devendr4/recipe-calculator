import { PUBLIC_API_URL } from '$env/static/public';
/* {
				id: 1,
				title: 'Red Velvet',
				price: 35,
				img: 'https://assets.elgourmet.com/wp-content/uploads/2023/03/red-v_kvUtb7ixJqMHo63e5OnXWyjZsfV2zP-1024x683.png.webp'
			} */
export const load = async () => {
	const response = await fetch(PUBLIC_API_URL);
	const data = await response.json();
	console.log(data);
	return {
		recipes: data
	};
};
