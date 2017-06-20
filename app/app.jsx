import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

//Load Foundation
$(document).foundation();


//browser history
const history = createBrowserHistory();
//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <p>Boilerplate3 Project</p>,
  document.getElementById("app")
); 