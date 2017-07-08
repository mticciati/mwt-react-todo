import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect, {createSpy, isSpy, spyOn} from 'expect';

import ItemList from 'ItemList';
import VisibleItemList from '../../containers/VisibleItemList';

describe('ItemList', () => {
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

  it('ItemList should exist', () => {
    expect(ItemList).toExist();
  }); 

  it('should render one Item for each item', () => {
    const todos = [
      {
        id: '1',
        text: 'do something',
        completed: false
      },
      {
        id: '2',
        text: 'do something else',
        completed: false
      }
    ];
    let dummyFunc = () => 'hello';
    const itemList = ReactTestUtils.renderIntoDocument(
      <Wrapper>
        <ItemList items={todos} onToggle={dummyFunc} />
      </Wrapper>
    );
    let $el = $(ReactDOM.findDOMNode(itemList));
    let items = $el.find('.item');
    let length = items.length;
    expect(length).toBe(2);

  });

  it('should render empty message if no todos', () => {
    let dummyFunc = () => 'hello';
    let todos = [];
    const itemList = ReactTestUtils.renderIntoDocument(
        <Wrapper>
          <ItemList items={todos} onToggle={dummyFunc} />
        </Wrapper>
      );    let $el = $(ReactDOM.findDOMNode(itemList));
    
    expect($el.find('.container__message').length).toBe(1);
  });

});