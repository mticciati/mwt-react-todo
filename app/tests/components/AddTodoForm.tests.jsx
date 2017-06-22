import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect, {createSpy} from 'expect';
var $ = require('jQuery');

import AddTodoForm from 'AddTodoForm';

describe('AddTodoForm', () => {

  it('should exist', () => {
    expect(AddTodoForm).toExist();
  });

  it('should call onAddTodo with valid data', () => {
    let text = 'check add todo functionality',
    spy = expect.createSpy(),
    addTodoForm = ReactTestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>),
    $el = $(ReactDOM.findDOMNode(addTodoForm)); 

    addTodoForm.refs.text.value = text;
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(text);

  });

  it('should NOT call onAddTodo with invalid data', () => {
    let text = '',
    spy = expect.createSpy(),
    addTodoForm = ReactTestUtils.renderIntoDocument(<AddTodoForm onAddTdod={spy} />),
    $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.text.value = text;
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });


});