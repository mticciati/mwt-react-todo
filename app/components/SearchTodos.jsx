import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchTodos extends Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    let data = {
      showCompleted: this.refs.showCompleted.checked,
      searchText: this.refs.searchText.value
    };

    this.props.onSearch(data);
  }

  render() {
    return (
      <div className="container__header">
        <div>
          <input 
            type="search" 
            ref="searchText"
            placeholder="Search todos" 
            onChange={this.handleSearch} /> 
        </div>
        <div>
          <label>
            <input 
              type="checkbox"
              ref="showCompleted"
              onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }

}

SearchTodos.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchTodos;