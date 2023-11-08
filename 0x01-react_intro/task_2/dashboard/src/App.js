import React from 'react';
import './App.css';
import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} alt='Holberton Logo' />
        <h1>School dashboard</h1>
      </header>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email' id='email'>Email: </label>
        <input id='email' name='email' type='email' />
        <label htmlFor='password' id='password'>Password: </label>
        <input id='password' name='password' type='password' />
        <button>OK</button>
      </div>
      
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p> 
      </footer>
    </div>
  )
};

export default App;
