import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cart';
import Header from '../components/Header';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({cart}) => ({
  totals: cart.items.reduce((totals, item) => totals + item.price, 0),
  count: cart.items.length,
  items: uniqBy(cart.items)
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
