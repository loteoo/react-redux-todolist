import { SET_ITEMS, ADD_ITEM } from '../actions/types';

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_ITEMS:
      return {
        ...state,
        items: action.payload
      }

    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.payload)
      }

    default:
      return state;
  }
}