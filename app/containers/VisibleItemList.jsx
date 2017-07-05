import {connect} from 'react-redux';
import {toggleTodo} from '../actions/actions';
import ItemList from 'ItemList';

const mapStateToProps = (state) => {
  return {
    items: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default VisibleItemList