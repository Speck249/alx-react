import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom', () => {
  it('renders a BodySection component with correct props', () => {
    const title = 'test title';
    const children = <p>test children node</p>;

    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(BodySection)).toHaveLength(1);

    const bodySectionProps = wrapper.find(BodySection).props();
    expect(bodySectionProps.title).toEqual(title);
    expect(bodySectionProps.children).toEqual(children);
  });
});
