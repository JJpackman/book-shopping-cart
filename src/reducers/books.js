import * as t from '../actions/actionTypes';

const initialState = {
  isReady: false,
  items: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_BOOKS:
      return {
        ...state,
        items: action.payload,
        isReady: true
      };
    default:
      return state;
  }
}
