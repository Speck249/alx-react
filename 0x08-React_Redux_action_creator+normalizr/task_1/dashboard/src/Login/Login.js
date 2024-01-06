import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    fontFamily: 'Aktivgrotesk, Arial, sans-serif',
    fontSize: '0.8rem',
    margin: '1em',
    textAlign: 'left',
    paddingTop: '2em',
    paddingLeft: '1.7em',
    borderTop: '3px solid #e1003c',
  },
});

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  const handleChangeEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEnableSubmit(value !== '' && password !== '');
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
    setEnableSubmit(email !== '' && value !== '');
  };

  return (
    <>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor='email' id='email'>
            Email:
          </label>
          <input
            id='email'
            name='email'
            type='email'
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor='password' id='password'>
            Password:
          </label>
          <input
            id='password'
            name='password'
            type='password'
            value={password}
            onChange={handleChangePassword}
          />
          <input type='submit' value='OK' disabled={!enableSubmit} />
        </form>
      </div>
    </>
  );
}

export default Login;
