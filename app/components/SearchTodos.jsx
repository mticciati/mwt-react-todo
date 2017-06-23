import React, {Component} from 'react';

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
      <div>
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

export default SearchTodos;