import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appBody: {
    fontFamily: 'Aktivgrotesk, Arial, sans-serif',
    fontSize: '0.8rem',
    textAlign: 'left',
    paddingTop: '2em',
    paddingLeft: '1.7em',
    borderTop: '3px solid #e1003c',
  },
});

function Login() {
  return (
    <>
      <div className={css(styles.appBody)}>
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
