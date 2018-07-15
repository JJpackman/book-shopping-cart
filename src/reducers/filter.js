import * as t from '../actions/actionTypes';

export const initialState = {
  searchQuery: '',
  filter: {
    by: 'all',
    order: 'asc'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    case t.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    default:
      return state;
  }
}
