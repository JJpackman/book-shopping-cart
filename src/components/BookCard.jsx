import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const BookCard = ({book, addToCart, addedCount}) => {
  const {image, title, author, price} = book;
  return (
    <Card>
      <Image src={image}/>
      <Card.Content>
        <Card.Header>
          {title}
        </Card.Header>
        <Card.Meta>
        <span>
          {author}
        </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='rub'/>
          {price}
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(null, book)}>Добавить в корзину {addedCount > 0 && <b>({addedCount})</b>}</Button>
    </Card>
  );
};

export default BookCard;
