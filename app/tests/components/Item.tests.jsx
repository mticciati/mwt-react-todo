import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect, {createSpy} from 'expect';
var $ = require('jQuery');

import Item from 'Item';

describe('Item', () => {

  it('should exist', () => {
    expect(Item).toExist();
  });

  it ('should call onToggle with item id when li clicked', () => {
    let todo = {
      id: 11,
      text: 'hello',
      completed: false
    };
    let spy = expect.createSpy();
    let item = ReactTestUtils.renderIntoDocument(<Item {...todo} onToggle={spy} />);
    let $el = $(ReactDOM.findDOMNode(item));

    ReactTestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(todo.id);

  });

});