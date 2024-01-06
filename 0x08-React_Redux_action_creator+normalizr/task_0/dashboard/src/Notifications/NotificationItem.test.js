import React from 'react';
import NotificationItem from 'NotificationItem.js';
import { shallow } from 'enzyme';


describe('NotificationItem component', () => {
  const minprops = { type='default', value='test', html= { __html: '<u>test</u>' } };
  it('should render without crashing', () => {
    shallow(<NotificationItem {...minprops} />);
  });

  it('should render the proper HTML', () => {
    const wrapper = shallow(<NotificationItem {...minprops} />)
    expect(wrapper.find(li).prop('type')).toBe('default');
    expect(wrapper.find(li).prop('html')).toBe=({{ __html: '<u>test</u>' }});
  });
  test('should call the spy with the correct ID when simulating a click', () => {
    const id = 1;
    const markAsReadSpy = jest.fn();
    const wrapper = mount(
      <NotificationItem
        id={id}
        type="info"
        value="Notification message"
        markAsRead={markAsReadSpy}
      />
    );

    wrapper.simulate('click');

    expect(markAsReadSpy).toHaveBeenCalledWith(id);
  });
});
