import { SET_ITEMS, ADD_ITEM, TOGGLE_ITEM_STATUS, SET_ITEM_TITLE, DELETE_ITEM } from '../actions/types';

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
        items: [action.payload].concat(state.items)
      }

    case TOGGLE_ITEM_STATUS:
      return {
        ...state,
        items:  state.items.map(item => 
          action.payload === item.id 
            ? ({...item, completed: !item.completed})
            : item
        )
      }

    case SET_ITEM_TITLE:
      return {
        ...state,
        items:  state.items.map(item => 
          action.payload.itemId === item.id 
            ? ({...item, title: action.payload.title})
            : item
        )
      }

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => action.payload !== item.id)
      }

    default:
      return state;
  }
}