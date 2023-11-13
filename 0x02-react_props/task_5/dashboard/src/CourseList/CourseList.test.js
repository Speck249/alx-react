import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList.js';

describe('CourseList component', () => {
  it('should render without crashing', () => {
    shallow(<CourseList />);
  });

  it('should render five different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('tr')).toHaveLength(5);
  });
});
