import reducer from './cart';
import * as t from '../actions/actionTypes';

describe('cart reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      items: []
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_TO_CART', () => {
    const addToCartAction = {
      type: t.ADD_TO_CART,
      payload: 'Rey Donovan'
    };

    expect(reducer(initialState, addToCartAction)).toEqual({
      ...initialState,
      items: [...initialState.items, addToCartAction.payload]
    });
  });

  it('should handle REMOVE_FROM_CART', () => {
    const stateBeforeRemove = {
      ...initialState,
      items: [
        {
          "id": 0,
          "title": "Происхождение",
          "author": "Дэн Браун",
          "image": "https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg",
          "price": 710,
          "rating": 3
        },
        {
          "id": 1,
          "title": "1984",
          "author": "Джордж Оруэлл",
          "image": "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
          "price": 415,
          "rating": 5
        }
      ]
    };

    const removeFromCart = {
      type: t.REMOVE_FROM_CART,
      payload: 0
    };

    expect(reducer(stateBeforeRemove, removeFromCart)).toEqual({
      ...initialState,
      items: [
        {
          "id": 1,
          "title": "1984",
          "author": "Джордж Оруэлл",
          "image": "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
          "price": 415,
          "rating": 5
        }
      ]
    });
  });
});
