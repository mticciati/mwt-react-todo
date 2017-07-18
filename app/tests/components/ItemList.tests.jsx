import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import {Provider} from 'react-redux';
import {configure} from '../../store/configureStore';

import ItemList from 'ItemList';
import VisibleItemList from '../../containers/VisibleItemList';
import Item from 'Item';

describe('ItemList', () => {
  // class Wrapper extends React.Component {
  //   constructor(props) {
  //     super(props)
  //   }
  //   render() {
  //     return (
  //       this.props.children
  //     );
  //   }  
  // }

  it('ItemList should exist', () => {
    expect(ItemList).toExist();
  }); 

  it('should render one Item for each item', () => {
    const todos = [
      {
        id: '1',
        text: 'do something',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      },
      {
        id: '2',
        text: 'do something else',
        completed: false,
        createdAt: 300,
        completedAt: undefined
      }
    ];

    let store = configure({
      todos
    });

    const provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <VisibleItemList />
      </Provider>
    );

    let $el = $(ReactDOM.findDOMNode(provider));
    let items = $el.find('.item');

    expect(items.length).toBe(todos.length);

  });

  it('should render empty message if no todos', () => {
    let todos = [];
    let store = configure({
      todos
    });
    const provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <VisibleItemList />
      </Provider>
    );
    let $el = $(ReactDOM.findDOMNode(provider));

    console.log($el);

    expect($el.find('.container__message').length).toBe(1);
  });

});