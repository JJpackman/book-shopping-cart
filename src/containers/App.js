import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as booksActions from '../actions/books';
import axios from 'axios';
import AppView from '../components/App';
import _ from 'lodash';

class App extends Component {
  componentWillMount() {
    const {setBooks} = this.props;
    axios.get('/books.json').then(({data}) => {
      setBooks(data);
    });
  }

  render() {
    const {books, isReady} = this.props;
    return (
      <AppView books={books} isReady={isReady} />
    );
  }
}

const filterBooksBySearchQuery = (books, searchQuery) => {
  return _.filter(books, book => {
    return ~book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) ||
      ~book.author.toLowerCase().indexOf(searchQuery.toLowerCase());
  })
};

const orderBooksByFilter = (books, filter) => {
  return _.orderBy(books, filter.by, filter.order);
};

const mapStateToProps = ({books, filter}) => ({
  books: orderBooksByFilter(
    filterBooksBySearchQuery(books.items, filter.searchQuery),
    filter.filter, filter.searchQuery
  ),
  isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
