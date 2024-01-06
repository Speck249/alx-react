import courseReducer from './courseReducer';
import {
  fetchCourseSuccess,
  selectCourse,
  unSelectCourse,
} from '../actions/courseActionCreators';
import { fromJS, Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
  it('should verify that the default state returns an empty Map', () => {
    const myState = courseReducer(undefined, {});
    expect(myState).toEqual(Map());
  });

  it('should verify that FETCH_COURSE_SUCCESS returns the passed data', () => {
    const currentState = Map();
    const returnData = [
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

    const myState = courseReducer(currentState, fetchCourseSuccess(returnData));
    expect(myState).toEqual(fromJS(coursesNormalizer(returnData)));
  });

  it('should verify that SELECT_COURSE returns the updated data with the specified item selected', () => {
    const currentState = fromJS(coursesNormalizer([
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
    ]));

    const returnData = [
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

    const myState = courseReducer(currentState, selectCourse(2));
    expect(myState).toEqual(fromJS(coursesNormalizer(returnData)));
  });

  it('should verify that UNSELECT_COURSE returns the updated data with the specified item unselected', () => {
    const currentState = fromJS(coursesNormalizer([
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
    ]));

    const returnData = [
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

    const myState = courseReducer(currentState, unSelectCourse(2));
    expect(myState).toEqual(fromJS(coursesNormalizer(returnData)));
  });
});
