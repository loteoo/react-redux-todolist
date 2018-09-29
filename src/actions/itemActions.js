import { FETCH_ITEMS, NEW_ITEMS } from './types';

export const fetchItems = () => dispatch =>
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(items => dispatch({
      type: FETCH_ITEMS,
      payload: items
    }))