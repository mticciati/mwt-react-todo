import React from 'react';
import PropTypes from 'prop-types';

const SearchTodos = ({showCompleted, searchText, onSearch, onToggle}) => {
  let input;
  return (
    <div className="container__header">
      <div>
        <input 
          type="search" 
          ref={node => {input = node}}
          value={searchText}
          placeholder="Search todos" 
          onChange={() => onSearch(input.value)} /> 
      </div>
      <div>
        <label>
          <input 
            type="checkbox"
            checked={showCompleted}
            onChange={() => onToggle()}/>
          Show completed todos
        </label>
      </div>
    </div>
  )
}

SearchTodos.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchTodos;