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
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '1em',
  },
  label: {
    display: 'block',
    marginBottom: '0.5em',
  },
  input: {
    marginBottom: '0.5em',
  },
  button: {
    marginTop: '1em',
  },
});

function Login() {
  return (
    <>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <div className={css(styles.formGroup)}>
          <label htmlFor='email' id='email' className={css(styles.label)}>
            Email:
          </label>
          <input id='email' name='email' type='email' className={css(styles.input)} />
        </div>
        <div className={css(styles.formGroup)}>
          <label htmlFor='password' id='password' className={css(styles.label)}>
            Password:
          </label>
          <input id='password' name='password' type='password' className={css(styles.input)} />
        </div>
        <button className={css(styles.button)}>OK</button>
      </div>
    </>
  );
}

export default Login;
