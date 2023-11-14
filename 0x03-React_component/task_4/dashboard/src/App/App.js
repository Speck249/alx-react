import React from 'react';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils.js';
import BodySectionWithMarginBottom from '../BodySectionWithMarginBottom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  }

  render() {
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
        <div className='App'>
          <Header />
          <div className='App-body'>
            {this.props.isLoggedIn === false ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum aliquet risus, eget gravida dui ullamcorper non. Mauris ut enim in quam pharetra vulputate. Suspendisse faucibus libero et lectus vulputate, sit amet feugiat velit gravida. Sed id justo eget nisl semper semper. Donec lacinia, felis quis tempor tincidunt, mauris nunc pulvinar nunc, sed mollis metus enim nec mauris. Curabitur sit amet justo ut mi finibus tincidunt et in diam. Nam metus quam, consectetur id ipsum sed, viverra feugiat dui.</p>
            </BodySection>
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
  logOut: PropTypes.func,
};

App.defaultProps = {
  logOut: () => {},
};

export default App;
