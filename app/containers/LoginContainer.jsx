import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/actions';

import Login from 'Login';

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: () => {
      dispatch(startLogin());
    }
  }
}

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Login);

export default LoginContainer;