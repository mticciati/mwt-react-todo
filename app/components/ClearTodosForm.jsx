import React from 'react';
import PropTypes from 'prop-types';

const ClearTodosForm = ({onClear}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    onClear();
  }

  return (
    <div className="container__footer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <button className="button expanded alert">Clear Todos</button>
      </form>
    </div>
  )

}

ClearTodosForm.PropTypes = {
  onClear: PropTypes.func.isRequired
}

export default ClearTodosForm;