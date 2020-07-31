import URL_BACK_END from '../config';

const URL_CATEGORIES = `${URL_BACK_END}/categorias`;

const getAllWithVideos = () => fetch(`${URL_CATEGORIES}/?_embed=videos`).then(async (response) => response.json());
const getAllCategories = () => fetch(URL_CATEGORIES).then(async (response) => response.json());

export default { getAllWithVideos, getAllCategories };
