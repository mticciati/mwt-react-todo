import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect, {createSpy} from 'expect';
import $ from 'jQuery';
import {Provider} from 'react-redux';

import SearchTodos from 'SearchTodos';

describe('SearchTodos', () => {

  it('should exist', () => {
    expect(SearchTodos).toExist();
  });

  it('should call onSearch with input value on input change', () => {
    const searchText = 'a';
    const spy = expect.createSpy();
    const search = ReactTestUtils.renderIntoDocument(SearchTodos({onSearch: spy}));

    let $el = $(ReactDOM.findDOMNode(search));
    let searchTodos = $el.find('input[type=search]')[0];
    searchTodos.value = searchText;
    ReactTestUtils.Simulate.change(searchTodos);

    expect(spy).toHaveBeenCalledWith(searchText);

  });

  it('should call onToggle with proper checkbox value', () => {
    const spy = expect.createSpy();
    const search = ReactTestUtils.renderIntoDocument(SearchTodos({onToggle: spy}));
    let $el = $(ReactDOM.findDOMNode(search));
    let showCompleted = $el.find('input[type=checkbox]')[0];
    showCompleted.checked = true;
    ReactTestUtils.Simulate.change(showCompleted);

    expect(spy).toHaveBeenCalled();
    expect(showCompleted.checked).toEqual(true);
  });

});