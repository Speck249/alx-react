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

  it('should render correctly with an empty array', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('tr')).toHaveLength(0);
  });

  it('should render the list of courses correctly', () => {
    const courses = [
      { id: 1, title: 'Course 1' },
      { id: 2, title: 'Course 2' },
      { id: 3, title: 'Course 3' },
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find('tr')).toHaveLength(courses.length);
    expect(wrapper.contains(<td>Course 1</td>)).toBe(true);
    expect(wrapper.contains(<td>Course 2</td>)).toBe(true);
    expect(wrapper.contains(<td>Course 3</td>)).toBe(true);
  });
});
