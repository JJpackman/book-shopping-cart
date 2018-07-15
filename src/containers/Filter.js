import Filter from '../components/Filter';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as filterActions from "../actions/filter";

const mapStateToProps = ({filter}) => ({
  filter: filter.filter,
  searchQuery: filter.searchQuery
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
