import * as t from './actionTypes';

export const setFilter = (filter) => ({
  type: t.SET_FILTER,
  payload: filter
});

export const setSearchQuery = (query) => ({
  type: t.SET_SEARCH_QUERY,
  payload: query
});
