import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect, {createSpy} from 'expect';
var $ = require('jQuery');

import AddTodoForm from 'AddTodoForm';
//import AddTodo from '../../containers/AddTodo';

describe('AddTodo', () => {

  it('should exist', () => {
    expect(AddTodoForm).toExist();
  });

  it('should call onAddTodo when valid input', () => {
    let text = 'check add todo functionality',
    spy = expect.createSpy(),
    addTodoForm = ReactTestUtils.renderIntoDocument(AddTodoForm({onAddTodo:spy})),
    $el = $(ReactDOM.findDOMNode(addTodoForm)); 

    // addTodoForm.refs.text.value = text;
    $el.find('input').val(text);
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(text);

  });

  it('should NOT call onAddTodo when invalid todd text', () => {
    let text = '',
    spy = expect.createSpy(),
    addTodoForm = ReactTestUtils.renderIntoDocument(AddTodoForm({onAddTodo: spy})),
    $el = $(ReactDOM.findDOMNode(addTodoForm));

    // addTodoForm.refs.text.value = text;
    $el.find('input').val(text);
    ReactTestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });


});