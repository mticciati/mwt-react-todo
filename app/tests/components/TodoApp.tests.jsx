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

});