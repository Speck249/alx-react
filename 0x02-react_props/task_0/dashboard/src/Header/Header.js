import React from 'react';
import './Header.css';
import logo from './holberton-logo.jpg';

function Header() {
  return (
    <div className='Header'>
      <header className='App-header'>
        <img src={logo} alt='Holberton Logo' />
        <h1>School dashboard</h1>
      </header>
    </div>
  )
};

export default Header;
