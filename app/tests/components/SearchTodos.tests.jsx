import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import expect, {createSpy} from 'expect';
var $ = require('jQuery');

import SearchTodos from 'SearchTodos';

describe('SearchTodos', () => {

  it('should exist', () => {
    expect(SearchTodos).toExist();
  });

});