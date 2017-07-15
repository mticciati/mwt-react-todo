import {connect} from 'react-redux';
import {startToggleTodo} from '../actions/actions';
import ItemList from 'ItemList';

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id, completed) => {
      dispatch(startToggleTodo(id, !completed))
    }
  }
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default VisibleItemList