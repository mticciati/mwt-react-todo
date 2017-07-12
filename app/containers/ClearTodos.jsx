import React from 'react';
import {clearTodos} from '../actions/actions';
import {connect} from 'react-redux';

import ClearTodosForm from 'ClearTodosForm';

function mapDispatchToProps (dispatch) {
  return {
    onClear: () => {
      dispatch(clearTodos())
    }
  }
}

const ClearTodos = connect(
  null,
  mapDispatchToProps
)(ClearTodosForm);

export default ClearTodos;