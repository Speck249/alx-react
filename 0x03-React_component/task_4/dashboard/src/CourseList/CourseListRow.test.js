import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow.js';

describe('CourseListRow component', () => {
  it('should render without crashing', () => {
    shallow(<CourseListRow />);
  });

  it('should render a cell with colspan = 2 when textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="hello" textSecondCell={null} />);
    expect(wrapper.find('th').prop('colSpan')).toEqual(2);
    expect(wrapper.find('th').text()).toEqual('hello');
  });

  it('should render two cells when textSecondCell is not null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="hello" textSecondCell="world" />);
    expect(wrapper.find('th')).toHaveLength(2);
    expect(wrapper.find('th').at(0).text()).toEqual('hello');
    expect(wrapper.find('th').at(1).text()).toEqual('world');
  });

  it('should render two td elements within a tr', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="hello" textSecondCell="world" />);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('hello');
    expect(wrapper.find('td').at(1).text()).toEqual('world');
  });
});
