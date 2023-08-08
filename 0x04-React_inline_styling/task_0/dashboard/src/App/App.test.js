import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test App.js', () => {
  let wrapper;
  let originalAlert;

  beforeEach(() => {
    wrapper = shallow(<App />);
    originalAlert = global.alert;
    global.alert = jest.fn();
  });

  afterEach(() => {
    global.alert = originalAlert;
  });

  it('Renders App without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('App component contains Notifications component', () => {
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('App component contains Header component', () => {
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('App component contains Login component', () => {
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('App component contains Footer component', () => {
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('pressing control and h keys should call logOut function and trigger alert', () => {
    const mockLogOut = jest.fn();
    wrapper = shallow(<App logOut={mockLogOut} />);
    const instance = wrapper.instance();
    
    // Mock the preventDefault method
    const preventDefault = jest.fn();

    // Mock the event object
    const event = {
      ctrlKey: true,
      key: 'h',
      preventDefault,
    };

    // Call the handleKeyPress method directly with the mock event object
    instance.handleKeyPress(event);

    // Check if logOut function is called only once when 'control' and 'h' keys are pressed
    expect(mockLogOut).toHaveBeenCalledTimes(1);

    // Check if alert function is called with the correct message when 'control' and 'h' keys are pressed
    expect(global.alert).toHaveBeenCalledWith('Logging you out');

    // Check if preventDefault is called on the event
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  it('removes the event listener on unmount', () => {
    const mockLogOut = jest.fn();
    wrapper = shallow(<App logOut={mockLogOut} />);
    const instance = wrapper.instance();
    const removeEventListenerSpy = jest.spyOn(instance, 'componentWillUnmount');

    // Unmount the component
    wrapper.unmount();

    // Check if the componentWillUnmount method was called
    expect(removeEventListenerSpy).toHaveBeenCalled();
  });
});

describe('Testing <App isLoggedIn={true} />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true} />);
  });

  it('the Login component is not included', () => {
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it('the CourseList component is included', () => {
    expect(wrapper.find('CourseList').exists()).toBeTruthy();
  });
});
