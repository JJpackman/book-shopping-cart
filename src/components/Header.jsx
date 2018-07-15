import React from 'react';
import {Menu, Popup} from 'semantic-ui-react';
import CartItem from './CartItem';

const Header = ({totals, count, items, removeFromCart}) => (
  <Menu>
    <Menu.Item name='shop'>
      Магазин книг
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item name='total'>
        Итого &nbsp;<b>{totals}</b> &nbsp; руб.
      </Menu.Item>

      <Popup
        trigger={
          <Menu.Item name='cart'>
            Корзина &nbsp;<b>({count})</b>
          </Menu.Item>
        }
        content={items.map(item => <CartItem {...item} removeFromCart={removeFromCart}/>)}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default Header;
