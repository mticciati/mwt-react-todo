import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import {startLogout} from '../actions/actions';
import {connect} from 'react-redux';

import LoginContainer from '../containers/LoginContainer';
import TodoApp from 'TodoApp';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(e) {
    const {dispatch} = this.props;
    e.preventDefault();

    dispatch(startLogout());
  }

  render() {
    return  (
      <div>
        <div className="page-actions">
          <NavLink 
            exact to="/" 
            activeClassName="active" 
            activeStyle={{fontWeight: 'bold'}}
          >Login</NavLink>  
          <NavLink 
            exact to="/" 
            activeClassName="active" 
            activeStyle={{fontWeight: 'bold'}}
            onClick={this.onLogout}
          >Logout</NavLink>  
          <NavLink 
            to="/todos" 
            activeClassName="active" 
            activeStyle={{fontWeight: 'bold'}}
          >Todos</NavLink>
        </div>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <Route exact path="/" component={LoginContainer}/>
            <Route path="/todos" component={TodoApp}/>
          </div>
        </div> 
      </div>
    ); 
  }
} 

export default connect()(App);