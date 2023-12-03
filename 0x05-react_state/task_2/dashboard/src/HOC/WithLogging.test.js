import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  let consoleLogSpy;
  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  afterEach(() => {
    consoleLogSpy.mockRestore();
  });
  it('logs mount and unmount for pure HTML component', () => {
    const WrappedComponent = () => <p>Pure HTML component</p>;
    const ComponentWithLogging = WithLogging(WrappedComponent);
    const wrapper = mount(<ComponentWithLogging />);

    expect(consoleLogSpy).toHaveBeenCalledWith('Component is mounted on componentDidMount()');
    wrapper.unmount();
    expect(consoleLogSpy).toHaveBeenCalledWith('Component is going to unmount on componentWillUnmount()');
  });
  it('logs mount and unmount with the name of the component for Login component', () => {
    const Login = () => <p>Login component</p>;
    const ComponentWithLogging = WithLogging(Login);
    const wrapper = mount(<ComponentWithLogging />);

    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');
    wrapper.unmount();
    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});
