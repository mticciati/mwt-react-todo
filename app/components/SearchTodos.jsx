import React from 'react';
import PropTypes from 'prop-types';

const SearchTodos = ({onSearch}) => {

  // constructor(props) {
  //   super(props);

  //   this.handleSearch = this.handleSearch.bind(this);
  // }
  let input, completed;
  const handleSearch = (e) => {
    let data = {
      showCompleted: completed.checked,
      searchText: input.value
    };

    onSearch(data);
  }

  // render() {
    return (
      <div className="container__header">
        <div>
          <input 
            type="search" 
            ref={node => {input = node}}
            placeholder="Search todos" 
            onChange={(e) => handleSearch(e)} /> 
        </div>
        <div>
          <label>
            <input 
              type="checkbox"
              ref={node => {completed = node}}
              onChange={(e) => handleSearch(e)}/>
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