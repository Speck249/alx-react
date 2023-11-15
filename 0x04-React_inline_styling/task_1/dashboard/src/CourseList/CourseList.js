import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
  table: {
    fontSize: '1.3rem',
    width: '85%',
    height: 'fit-content',
    marginTop: '2em',
    marginBottom: '10em',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid #000',
  },
  headerRow: {
    borderBottom: '1px solid #000',
    textAlign: 'left',
  },
});

function CourseList({ listCourses }) {
  if (listCourses === 0) {
    return (
      <div>
        <p>No course available yet</p>
      </div>
    );
  }

  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
            isHeader={false}
          />
        ))}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
