import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Tests for action creators', () => {
  it('should create the correct action object for selectCourse', () => {
    const expectedAction = { type: SELECT_COURSE, index: 1 };
    const action = selectCourse(1);
    expect(action).toEqual(expectedAction);
  });

  it('should create the correct action object for unSelectCourse', () => {
    const expectedAction = { type: UNSELECT_COURSE, index: 1 };
    const action = unSelectCourse(1);
    expect(action).toEqual(expectedAction);
  });
});
