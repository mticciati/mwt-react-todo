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

  beforeEach(() => {
    instance = ReactTestUtils.renderIntoDocument(
      <Wrapper>
        <Item {...todo} onToggle={spy} />
      </Wrapper>
    );
  });

  it('should exist', () => {
    expect(Item).toExist();
  });

  it ('should dispatch TOGGLE_TODO action with item id when li clicked', () => {
    
    let $el = $(ReactDOM.findDOMNode(instance));
    ReactTestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalled();

  });

});