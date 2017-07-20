import React from 'react';

const Login = ({onLogin}) => (
  <div>
    <h1 className="page-title">Todo App</h1>
    <div className="callout callout-auth">
      <h3>Login</h3>
      <p>Login with GitHub account below</p>
      <button className="button" onClick={onLogin}>Login with GitHub</button>
    </div>
  </div>
)

export default Login;