import * as t from './actionTypes';
import * as booksActions from './books';
import * as cartActions from './cart';
import * as filterActions from './filter';

describe('actions', () => {
  describe('books actions', () => {
    it('setBooks() should attach books', () => {
      const expectedAction = {
        type: t.SET_BOOKS,
        payload: [
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

      expect(booksActions.setBooks(expectedAction.payload)).toEqual(expectedAction);
    });
  });

  describe('cart actions', () => {
    it('addToCart() should add new item', () => {
      const expectedAction = {
        type: t.ADD_TO_CART,
        payload: {
          "id": 1,
          "title": "1984",
          "author": "Джордж Оруэлл",
          "image": "https://cv0.litres.ru/sbc/09233908_cover_185-elektronnaya-kniga--.jpg",
          "price": 415,
          "rating": 5
        }
      };

      expect(cartActions.addToCart(expectedAction.payload)).toEqual(expectedAction);
    });

    it('removeFromCart() should delete item', () => {
      const expectedAction = {
        type: t.REMOVE_FROM_CART,
        payload: 0
      };

      expect(cartActions.removeFromCart(expectedAction.payload)).toEqual(expectedAction);
    });
  });

  describe('filter actions', () => {
    it('setFilter() should attach filter data', () => {
      const expectedAction = {
        type: t.SET_FILTER,
        payload: {
          by: 'author', order: 'asc'
        }
      };

      expect(filterActions.setFilter(expectedAction.payload)).toEqual(expectedAction);
    });

    it('setSearchQuery() should set query string', () => {
      const expectedAction = {
        type: t.SET_SEARCH_QUERY,
        payload: 'history'
      };

      expect(filterActions.setSearchQuery(expectedAction.payload)).toEqual(expectedAction);
    });
  });
});
