import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Notifications from './Notifications.js';


const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Notifications />
    <App />
  </React.StrictMode>,
  root
);
