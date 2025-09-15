
import '../styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './render-functions.js';

const form = document.getElementById('search-form');
const input = form.elements['search-text'];
const submitBtn = form.querySelector('button');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Oops',
      message: 'Please type something to search.',
      position: 'topRight',
    });
    return;
  }
  clearGallery();
  showLoader();
  submitBtn.disabled = true;

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits || data.hits.length === 0) {
      iziToast.info({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    createGallery(data.hits);
  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: err?.message || 'Something went wrong. Try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    submitBtn.disabled = false;
  }
});
