import React from 'react';
import PropTypes from 'prop-types';

const ClearTodosForm = ({onClearTodos}) => {

  return (
    <div className="container__footer">
      <button className="button expanded alert" onClick={onClearTodos}>Clear Todos</button>
    </div>
  )

}

ClearTodosForm.PropTypes = {
  onClearTodos: PropTypes.func.isRequired
}

export default ClearTodosForm;