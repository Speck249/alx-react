import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Login from './Login.js';
import Footer from './Footer.js';


const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Login />
    <Footer />
  </React.StrictMode>,
  root
);
