import React from 'react';
import {withRouter} from 'react-router';
import {NavLink} from 'react-router-dom';
import {startLogout} from 'app/actions/actions';
import {connect} from 'react-redux';
import {configure} from '../store/configureStore';
import {startAddTodos} from '../actions/actions';
import firebase from 'app/firebase/';

import Routes from 'app/routes/';

class App extends React.Component {

  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let store = configure();
        store.dispatch(startAddTodos());
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
            <Routes/>
          </div>
        </div> 
      </div>
    ); 
  }
} 

const AppWithRouter = withRouter(connect()(App));

export default AppWithRouter;