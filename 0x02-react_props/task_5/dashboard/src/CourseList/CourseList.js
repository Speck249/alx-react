import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';

function CourseList({ listCourses }) {
  if (listCourses === 0) {
    <div>
      <p>No course available yet</p>
    </div>
  }

  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.map(course => (
	  <CourseListRow
	    key={course.id}
	    textFirstCell={course.name}
	    textSecondCell={course.credit}
	    isHeader={false}
	  />
	))};
      </tbody>
    </table>
  );
}

CourseList.PtopTypes = {
  listCourses: propTypes.arrayOf(CourseShape),
};


export default CourseList;
