import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import LoginContainer from '../containers/LoginContainer';
import TodoApp from 'TodoApp';

const App = () => (
  <div>
    <div className="page-actions">
      <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Login</NavLink>  
      <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Logout</NavLink>  
      <NavLink to="/todos" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Todos</NavLink>
    </div>
    <div className="row">
      <div className="column small-centered small-11 medium-6 large-5">
        <Route exact path="/" component={LoginContainer}/>
        <Route path="/todos" component={TodoApp}/>
      </div>
    </div> 
  </div>
); 

export default App;