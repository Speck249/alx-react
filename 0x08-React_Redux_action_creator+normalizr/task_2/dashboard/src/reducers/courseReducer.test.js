import courseReducer from './courseReducer';
import { fetchCourseSuccess, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

describe('course reducer tests', () => {
  const defaultState = [];
  const data = [
    {
      id: 1,
      name: 'ES6',
      credit: 60,
    },
    {
      id: 2,
      name: 'Webpack',
      credit: 20,
    },
    {
      id: 3,
      name: 'React',
      credit: 40,
    },
  ];

  it('should return an empty array if no action is passed', () => {
    expect(courseReducer(defaultState, 'null')).toEqual([]);
  });

  it('should return the correct data on successful fetch', () => {
    expect(courseReducer(data, fetchCourseSuccess())).toEqual(
      data.map((course) => ({
        ...course,
        isSelected: false,
      }))
    );
  });

  it('should return the data with the correct item selected', () => {
    const selectedData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    expect(courseReducer(data, selectCourse(2))).toEqual(selectedData);
  });

  it('should return the data with the correct item unselected', () => {
    const unselectedData = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    expect(courseReducer(data, unSelectCourse(2))).toEqual(unselectedData);
  });
});
