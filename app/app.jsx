import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';
import * as actions from './actions/actions';
import {configure} from './store/configureStore';

//Load Foundation
$(document).foundation();

//Store
let store = configure();
store.subscribe(() => {
  console.log('New State', store.getState());
});

store.dispatch(actions.addTodo('Bow to the cat'));
store.dispatch(actions.setSearchText('cat'));
store.dispatch(actions.toggleShowCompleted());

//browser history
const history = createBrowserHistory();
//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("app")
); 