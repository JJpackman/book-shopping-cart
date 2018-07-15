import React from 'react';
import Header from '../containers/Header';
import {Container, Card} from 'semantic-ui-react';
import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';

const App = ({books, isReady}) => {
  return (
    <Container>
      <Header/>
      <Filter/>
      <Card.Group doubling={true} itemsPerRow={5}>
        {
          !isReady ? 'Загрузка...'
            : books.map(book => (
              <BookCard key={book.title + book.author} book={book}/>
            ))
        }
      </Card.Group>
    </Container>
  );
};

export default App;
