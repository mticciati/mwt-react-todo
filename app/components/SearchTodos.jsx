import React from 'react';
import PropTypes from 'prop-types';

const SearchTodos = ({showCompleted, searchText, onSearch, onToggle}) => {

  // constructor(props) {
  //   super(props);

  //   this.handleSearch = this.handleSearch.bind(this);
  // }
  let input;
  const handleSearch = (e) => {
    // let data = {
    //   showCompleted: completed.checked,
    //   searchText: input.value
    // };

    onSearch(input.value);
  }

  // render() {
    return (
      <div className="container__header">
        <div>
          <input 
            type="search" 
            ref={node => {input = node}}
            value={searchText}
            placeholder="Search todos" 
            onChange={(e) => handleSearch(e)} /> 
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