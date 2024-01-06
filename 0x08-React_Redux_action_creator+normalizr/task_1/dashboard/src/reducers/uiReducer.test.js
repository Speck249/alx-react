import uiReducer, { defaultState } from './uiReducer';
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';

describe('uiReducer', () => {
  it('verifies the initial state returned when no action is passed to uiReducer', () => {
    const myState = uiReducer(defaultState, '');
    expect(myState.toJS()).toEqual(defaultState.toJS());
  });

  it('verifies that the state equals the initial state when the action SELECT_COURSE is passed', () => {
    const myState = uiReducer(defaultState, selectCourse());
    expect(myState.toJS()).toEqual(defaultState.toJS());
  });

  it('verifies that the property isNotificationDrawerVisible is true when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const myState = uiReducer(defaultState, displayNotificationDrawer());
    expect(myState.toJS().isNotificationDrawerVisible).toEqual(true);
  });
});
