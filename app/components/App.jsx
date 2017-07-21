import React from 'react';
import {withRouter} from 'react-router';
import {Route, NavLink} from 'react-router-dom';
import {startLogout} from '../actions/actions';
import {connect} from 'react-redux';
import firebase from 'app/firebase/';

import LoginContainer from '../containers/LoginContainer';
import TodoApp from 'TodoApp';

class App extends React.Component {

  constructor(props) {
    super(props);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push('/todos');
      } else {
        this.props.history.push('/');
      }
    });

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

const AppWithRouter = withRouter(connect()(App));

export default AppWithRouter;