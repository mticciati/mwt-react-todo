import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AuthRoute from './AuthRoute';
import TodoApp from 'TodoApp';
import LoginContainer from '../containers/LoginContainer';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={LoginContainer}/>
    <AuthRoute back={"/"}>
      <Route path="/todos" component={TodoApp}/>
    </AuthRoute>
  </Switch>
)

export default Routes;