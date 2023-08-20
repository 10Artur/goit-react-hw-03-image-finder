import axios from 'axios';

const API_KEY = '38325483-f310682686b8c751ed7bfe5c0';
const BAZE_URL = 'https://pixabay.com/api/';

export const pixabayAPI = async(query, page, perPage) => {
    return await axios.get(BAZE_URL, {
        params: {
            q: query,
            page,
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: perPage,
        },
    });
};