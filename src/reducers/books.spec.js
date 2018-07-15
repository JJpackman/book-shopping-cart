import reducer from './books';
import * as t from '../actions/actionTypes';

describe('books reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      isReady: false,
      items: null
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_BOOKS', () => {
    const setBooksAction = {
      type: t.SET_BOOKS,
      payload: [
        {
          "id": 3,
          "title": "Империя должна умереть",
          "author": "Михаил Зыгарь",
          "image": "https://cv0.litres.ru/sbc/30804904_cover_185-elektronnaya-kniga-mihail-zygar-imperiya-dolzhna-umeret.jpg",
          "price": 741,
          "rating": 3
        },
        {
          "id": 4,
          "title": "Земное притяжение",
          "author": "Татьяна Устинова",
          "image": "https://cv9.litres.ru/sbc/30087292_cover_185-elektronnaya-kniga-tatyana-ustinova-zemnoe-prityazhenie.jpg",
          "price": 317,
          "rating": 1
        },
        {
          "id": 5,
          "title": "Зулейха открывает глаза",
          "author": "Гузель Яхина",
          "image": "https://cv5.litres.ru/sbc/17411250_cover_185-elektronnaya-kniga-guzel-yahina-zuleyha-otkryvaet-glaza-2.jpg",
          "price": 254,
          "rating": 0
        }
      ]
    };

    expect(reducer(initialState, setBooksAction)).toEqual({
      ...initialState,
      isReady: true,
      items: setBooksAction.payload
    })
  });
});
