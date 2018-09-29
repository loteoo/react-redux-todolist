import { SET_ITEMS, ADD_ITEM, TOGGLE_ITEM_STATUS, SET_ITEM_TITLE, DELETE_ITEM } from './types';

export const fetchItems = () => dispatch => (
  fetch(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10&_sort=id&_order=DESC`)
    .then(response => response.json())
    .then(items => dispatch({
      type: SET_ITEMS,
      payload: items
    }))
)


export const createItem = newItem => dispatch => (
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newItem)
  })
    .then(response => response.json())
    .then(item => dispatch({
      type: ADD_ITEM,
      payload: item
    }))
)


export const toggleItemStatus = itemId => dispatch => dispatch({
  type: TOGGLE_ITEM_STATUS,
  payload: itemId
})


export const setItemTitle = (itemId, title) => dispatch => dispatch({
  type: SET_ITEM_TITLE,
  payload: {
    itemId,
    title
  }
})


export const deleteItem = itemId => dispatch => dispatch({
  type: DELETE_ITEM,
  payload: itemId
})