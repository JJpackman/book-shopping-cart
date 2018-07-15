import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cart';
import BookCard from '../components/BookCard';

const mapStateToProps = ({cart}, {book}) => ({
  addedCount: cart.items.reduce((count, item) => count + (item.id === book.id ? 1 : 0), 0)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
