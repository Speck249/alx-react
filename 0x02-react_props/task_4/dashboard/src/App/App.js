import React from 'react';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import PropTypes from 'prop-types';

const App = ({ isLoggedIn = false }) => {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        <div className='App-body'>
          {isLoggedIn === false ? <Login /> : <CourseList />}
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
