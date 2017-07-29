import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import expect, {createSpy} from 'expect';
import $ from 'jQuery';

import ClearTodosForm from 'ClearTodosForm';

describe('ClearTodosForm', () => {

  it('should exist', () => {
    expect(ClearTodosForm).toExist();
  });

  it('should call onClearTodos when submitted', () => {
    let spy = expect.createSpy();
    let form = ReactTestUtils.renderIntoDocument(ClearTodosForm({onClearTodos: spy}));

    let $el = $(ReactDOM.findDOMNode(form));
    ReactTestUtils.Simulate.click($el.find('button')[0]);

    expect(spy).toHaveBeenCalled();
  });

});