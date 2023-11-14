import React from 'react';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils.js';


const App extends React.Component {
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

  render (){
    return (
      <>
        <Notifications listNotifications={this.listNotifications} />
        <div className='App'>
          <Header />
          <div className='App-body'>
            {this.isLoggedIn === false ? <Login /> : <CourseList listCourses={this.listCourses} />}
          </div>
          <div className='App-footer'>
            <Footer />
          </div>
        </div>
      </>
  );
 }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
