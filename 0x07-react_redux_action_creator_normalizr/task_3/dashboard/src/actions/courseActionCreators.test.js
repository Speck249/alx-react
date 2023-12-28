import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
  describe('selectCourse', () => {
    it('should create an action to select a course with the given index', () => {
      const index = 1;
      const expectedAction = {
        type: SELECT_COURSE,
        index: index
      };
      const action = selectCourse(index);
      expect(action).toEqual(expectedAction);
    });
  });

  describe('unSelectCourse', () => {
    it('should create an action to unselect a course with the given index', () => {
      const index = 1;
      const expectedAction = {
        type: UNSELECT_COURSE,
        index: index
      };
      const action = unSelectCourse(index);
      expect(action).toEqual(expectedAction);
    });
  });
});
