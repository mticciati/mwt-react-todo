import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';

import TodoApp from 'TodoApp';

var $ = require('jQuery');

describe('TodoApp', () => {

  it('should exist', () =>{
    expect(TodoApp).toExist();
  });

  it('should add todo to todos state on handleAddTodo', () => {
    let todoText = 'test text';
    let todoApp = ReactTestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({
      todos: []
    });

    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos.length).toBe(1);
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle todos state with handleToggle', () => {
    let todo = {
      id: 11,
      text: 'hello',
      completed: false
    };
    let todoApp = ReactTestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todo]});

    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(11);

    expect(todoApp.state.todos[0].completed).toBe(true);

  });

});