import * as t from './actionTypes';

export const addToCart = item => ({
  type: t.ADD_TO_CART,
  payload: item
});

export const removeFromCart = id => ({
  type: t.REMOVE_FROM_CART,
  payload: id
});
