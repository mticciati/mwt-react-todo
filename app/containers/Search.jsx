import React from 'react';
import {connect} from 'react-redux';
import {setSearchText, toggleShowCompleted} from '../actions/actions';

import SearchTodos from 'SearchTodos';

function mapStateToProps (state) {
  return {
    searchText: state.searchText,
    showCompleted: state.showCompleted
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onSearch: (text) => {
      dispatch(setSearchText(text))
    },
    onToggle: () => {
      dispatch(toggleShowCompleted());
    }
  }
}

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTodos);

export default Search;