import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
          <label htmlFor="login-email">Email: </label>
	  <input id="login-email" name="login-email" type="email">
      </div>
    </>
   );
}

export default Login;
