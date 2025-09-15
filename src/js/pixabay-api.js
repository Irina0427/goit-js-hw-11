
import axios from 'axios';
const API_KEY = '52299901-ed5308505488786f07030921d';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  const { data } = await axios.get(BASE_URL, { params });
  return data; 
}
