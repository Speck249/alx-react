import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Notification from './Notification.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

const rootNotifications = ReactDOM.createRoot(document.getElementById('rootNotifications'));
rootNotifications.render (
  <React.StrictMode>
    <Notification/>
  <React.StrictMode>
);
