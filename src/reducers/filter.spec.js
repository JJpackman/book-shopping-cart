import reducer from "./filter";
import * as t from '../actions/actionTypes';

describe('filter reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      searchQuery: '',
      filter: {
        by: 'all',
        order: 'asc'
      }
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle SET_FILTER`, () => {
    const setFilterAction = {
      type: t.SET_FILTER,
      payload: {
        by: 'author', order: 'asc'
      }
    };

    expect(reducer(initialState, setFilterAction)).toEqual({
      ...initialState,
      filter: {by: 'author', order: 'asc'}
    });
  });

  it('should handle SET_SEARCH_QUERY', () => {
    const setSearchQueryAction = {
      type: t.SET_SEARCH_QUERY,
      payload: 'Daniel'
    };

    expect(reducer(initialState, setSearchQueryAction)).toEqual({
      ...initialState,
      searchQuery: 'Daniel'
    });
  });
});
