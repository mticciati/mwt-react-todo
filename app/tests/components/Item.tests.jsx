import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect, {createSpy} from 'expect';
import {toggleTodo} from '../../actions/actions';

var $ = require('jQuery');

import Item from 'Item';

describe('Item', () => {

  // beforeEach(() => {
  //   let spyToggle = expect.createSpy(() => toggleTodo(11));
  //   let todo = {
  //     id: 11,
  //     text: 'hello',
  //     completed: false
  //   };
  //   const item = ReactTestUtils.renderIntoDocument(<Item {...todo} onToggle={spyToggle} />);
  // });

  it('should exist', () => {
    expect(Item).toExist();
  });

  it ('should dispatch TOGGLE_TODO action with item id when li clicked', () => {
    let todo = {
      id: 11,
      text: 'hello',
      completed: false
    };
    let spy = expect.createSpy(() => toggleTodo(todo.id));
    let item = ReactTestUtils.renderIntoDocument(<Item {...todo} onToggle={spy} />);
    // let $el = $(ReactDOM.findDOMNode(item));
    let $el = $(item).find('.item');

    ReactTestUtils.Simulate.click($el);
    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todo.id
    });

  });

});