import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/actions';

import AddTodoForm from 'AddTodoForm';

function mapDispatchToProps (dispatch) {
  return {
    onAddTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}

const AddTodo = connect(
  null, 
  mapDispatchToProps
)(AddTodoForm);

export default AddTodo;