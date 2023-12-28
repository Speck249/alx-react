import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  headerCell: {
    fontWeight: 'bold',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const rowClassName = css(styles.row);
  const headerRowClassName = css(styles.headerRow);
  const headerCellClassName = css(styles.headerCell);

  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <tr className={headerRowClassName}>
          <th colSpan={2} className={headerCellClassName}>
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr className={headerRowClassName}>
          <th className={headerCellClassName}>{textFirstCell}</th>
          <th className={headerCellClassName}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={rowClassName}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
