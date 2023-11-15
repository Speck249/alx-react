import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    height: '60vh',
    fontFamily: 'Aktivgrotesk, Arial, sans-serif',
  },
  logo: {
    width: '140px',
    height: '140px',
  },
  title: {
    display: 'inline-block',
    fontSize: '1.6rem',
    color: '#e1003c',
  },
});

function Header() {
  return (
    <div className={css(styles.Header)}>
      <header className={css(styles.header)}>
        <img src={logo} alt='Holberton Logo' className={css(styles.logo)} />
        <h1 className={css(styles.title)}>School dashboard</h1>
      </header>
    </div>
  );
}

export default Header;
