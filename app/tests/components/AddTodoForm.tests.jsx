import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
var $ = require('jQuery');

import AddTodoForm from 'AddTodoForm';

describe('AddTodoForm', () => {

  it('should exist', () => {
    expect(AddTodoForm).toExist();
  });

});