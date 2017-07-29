import React from 'react';
import {startClearTodos} from '../actions/actions';
import {connect} from 'react-redux';

import ClearTodosForm from 'ClearTodosForm';

function mapDispatchToProps (dispatch) {
  return {
    onClearTodos: () => {
      dispatch(startClearTodos())
    }
  }
}

const ClearTodos = connect(
  null,
  mapDispatchToProps
)(ClearTodosForm);

export default ClearTodos;