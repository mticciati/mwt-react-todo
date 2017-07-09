import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect, {createSpy} from 'expect';

var $ = require('jQuery');

import Item from 'Item';

describe('Item', () => {
  let instance, li, spy, todo;
  todo = {
    id: 11,
    text: 'hello',
    completed: false,
    createdAt: 123,
    completedAt: undefined
  };
  spy = expect.createSpy();
  class Wrapper extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        this.props.children
      );
    }  
  }

  it('should exist', () => {
    expect(Item).toExist();
  });

  // it ('should dispatch TOGGLE_TODO action with item id when li clicked', () => {
  it ('should call spy when li clicked', () => {
    instance = ReactTestUtils.renderIntoDocument(
      <Wrapper>
       <Item {...todo} onToggle={spy} />
      </Wrapper>
    );
    let $el = $(ReactDOM.findDOMNode(instance));
    console.log($el);
    ReactTestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalled();

  });

});