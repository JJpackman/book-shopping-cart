import React from 'react';
import {List, Button, Image} from 'semantic-ui-react';

const CartItem = ({title, id, image, removeFromCart}) => {
  return (
    <List selection divided verticalAlign='middle'>
      <List.Item>
        <List.Content floated='right'>
          <Button onClick={removeFromCart.bind(null, id)} color="red">Удалить</Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content>{title}</List.Content>
      </List.Item>
    </List>
  );
};

export default CartItem;
