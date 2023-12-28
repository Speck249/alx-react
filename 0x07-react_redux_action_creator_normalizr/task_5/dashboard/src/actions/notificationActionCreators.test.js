import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Tests for action creators', () => {
  it('should create the correct action object for selectCourse', () => {
    const action = selectCourse(1);
    const expectedAction = { type: SELECT_COURSE, index: 1 };
    expect(action).toEqual(expectedAction);
  });

  it('should create the correct action object for unSelectCourse', () => {
    const action = unSelectCourse(1);
    const expectedAction = { type: UNSELECT_COURSE, index: 1 };
    expect(action).toEqual(expectedAction);
  });
});
