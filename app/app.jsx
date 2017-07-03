import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import TodoApp from 'TodoApp';
import * as action from './actions/actions';
import configure from 'store/configureStore';

//Load Foundation
$(document).foundation();


//browser history
const history = createBrowserHistory();
//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById("app")
); 