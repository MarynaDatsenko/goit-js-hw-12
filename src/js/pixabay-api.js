import axios from 'axios';

const searchesOptions = {
  key: '47527494-043e5fa64e78cd3667b900e8d',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
	safesearch: true,
	per_page: 15,
	page: 1,
};

async function searchImages() {
	const params = new URLSearchParams(searchesOptions);
	const res = await axios.get(`https://pixabay.com/api/?${params}`);
	return res.data;
};


export {
	searchesOptions,
	searchImages,
}