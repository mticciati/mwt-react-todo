import React from 'react';
import {clearTodos} from '../actions/actions';

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