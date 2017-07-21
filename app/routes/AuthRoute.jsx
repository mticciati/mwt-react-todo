import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'app/firebase/';

class AuthRoute extends React.Component {
  constructor(props) {
    super(props);

    this.authenticated = this.authenticated.bind(this);
  }

  authenticated() {
    var user = firebase.auth().currentUser;
    if (user) {
      return true;
    }
   
    return false;
  }

  render() {
    return (
      <div>
        {this.authenticated() ? this.props.children : <Redirect to={this.props.back}/>}
      </div>
    )
  }
}

AuthRoute.defaultProps = {
  back: '/'
}

AuthRoute.propTypes = {
  back: PropTypes.string
}

export default AuthRoute;