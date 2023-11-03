import React from 'react';
import './Header.css'
import hLogo from '../assets/holberton-logo.jpg';


const Header = () => {
  return (
    <div className="App-header">
      <img src={hLogo} alt="Holberton Logo">
      <h1>School dashboard</h1>
    </div>
  )
}

export default Header;
