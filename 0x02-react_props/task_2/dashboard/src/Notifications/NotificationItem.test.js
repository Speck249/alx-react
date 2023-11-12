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
});
