import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email' id='email'>Email: </label>
        <input id='email' name='email' type='email' />
        <label htmlFor='password' id='password'>Password: </label>
        <input id='password' name='password' type='password' />
        <button>OK</button>
      </div>
    </>
  );
}

export default Login;
