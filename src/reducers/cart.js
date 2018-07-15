import * as t from '../actions/actionTypes';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_TO_CART:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };
    case t.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}
