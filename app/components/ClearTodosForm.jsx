import React from 'react';
import PropTypes from 'prop-types';

const ClearTodosForm = ({onClear}) => (

  <div className="container__footer">
    <form onSubmit={() => onClear()}>
      <button className="button expanded">Clear Todos</button>
    </form>
  </div>

)

ClearTodosForm.PropTypes = {
  onClear: PropTypes.func.isRequired
}

export default ClearTodosForm;