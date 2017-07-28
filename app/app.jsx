import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import AppWithRouter from 'AppWithRouter';
import * as actions from './actions/actions';
import {configure} from './store/configureStore';
import TodoAPI from 'TodoAPI';

//Load Foundation
$(document).foundation();

//Store
let store = configure();

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("app")
); 