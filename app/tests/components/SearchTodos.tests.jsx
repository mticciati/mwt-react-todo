import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect, {createSpy} from 'expect';
var $ = require('jQuery');

import SearchTodos from 'SearchTodos';

describe('SearchTodos', () => {

  it('should exist', () => {
    expect(SearchTodos).toExist();
  });

  it('should call onSearch with entered input text', () => {
    const searchText = 'a';
    const spy = expect.createSpy();
    const searchTodos = ReactTestUtils.renderIntoDocument(<SearchTodos onSearch={spy} />);

    searchTodos.refs.searchText.value = searchText;
    ReactTestUtils.Simulate.change(searchTodos.refs.searchText);

    expect(spy).toHaveBeenCalledWith({
      showCompleted: false,
      searchText: searchText
    });

  });

  it('should call onSearch with proper checkbox value', () => {
    const spy = expect.createSpy();
    const searchTodos = ReactTestUtils.renderIntoDocument(<SearchTodos onSearch={spy} />);

    searchTodos.refs.showCompleted.checked = true;
    ReactTestUtils.Simulate.change(searchTodos.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith({
      showCompleted: true,
      searchText: ''
    });
  });

});