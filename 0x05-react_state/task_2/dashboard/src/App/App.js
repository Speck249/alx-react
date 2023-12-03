import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils.js';
import BodySectionWithMarginBottom from '../BodySectionWithMarginBottom';

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    borderBottom: '4px solid red',
  },
  appBody: {
    fontFamily: 'Aktivgrotesk, Arial, sans-serif',
    fontSize: '0.8rem',
    textAlign: 'left',
    paddingTop: '2em',
    paddingLeft: '1.7em',
    borderTop: '3px solid #e1003c',
  },
  appFooter: {
    fontSize: '0.8rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

function App() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  });

  const logIn = (email, password) => {
    setUser({
      email: email,
      password: password,
      isLoggedIn: true,
    });
  };

  const logOut = () => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  };

  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    { id: 1, type: 'default', value: 'new course available' },
    { id: 2, type: 'urgent', value: 'new course available' },
    { id: 3, type: 'urgent', html: getLatestNotification() },
  ];

  return (
    <>
      <Notifications listNotifications={listNotifications} />
      <div className={css(styles.app)}>
        <Header />
        <div className={css(styles.appBody)}>
          {user.isLoggedIn === false ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={logIn} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum aliquet risus, eget gravida dui
              ullamcorper non. Mauris ut enim in quam pharetra vulputate. Suspendisse faucibus libero et lectus vulputate,
              sit amet feugiat velit gravida. Sed id justo eget nisl semper semper. Donec lacinia, felis quis tempor tincidunt,
              mauris nunc pulvinar nunc, sed mollis metus enim nec mauris. Curabitur sit amet justo ut mi finibus tincidunt
              et in diam. Nam metus quam, consectetur id ipsum sed, viverra feugiat dui.
            </p>
          </BodySection>
        </div>
        <div className={css(styles.appFooter)}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
