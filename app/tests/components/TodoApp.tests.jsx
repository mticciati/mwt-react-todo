import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import {Provider} from 'react-redux';
import {configure} from '../../store/configureStore';

import TodoApp from 'TodoApp';

var $ = require('jQuery');

describe('TodoApp', () => {

  it('should exist', () =>{
    expect(TodoApp).toExist();
  });

  it('should render ItemList', () => {
    let store = configure();
    let provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    let $el = $(ReactDOM.findDOMNode(provider));
    let itemList = $el.find('.item-list');

    expect(itemList.length).toEqual(1);
  });

});