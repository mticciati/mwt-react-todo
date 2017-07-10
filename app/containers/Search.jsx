import React from 'react';
import {connect} from 'react-redux';
import {setSearchText} from '../actions/actions';

import SearchTodos from 'SearchTodos';

function mapStateToProps (state) {
  return {
    items: state.todos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onSearch: (text) => {
      dispatch(setSearchText(text))
    }
  }
}

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTodos);

export default Search;