import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<Notififactions />', () => {
    it ('renders without crashing', () => {
        shallow(<Notifications />);
    })

    test('the component renders NotificationItem elements', () => {
        const wrapper = shallow(<Notificationitem />);
        expect(wrapper.find(NotificationItem)).toHaveLength(1);
    })
    test('renders the text Here is the list of notifications', () => {
        const text = 'Here is the list of notifications';
        const wrapper = shallow(<Notification />);
        expect(wrapper.find('p').text()).toBe(text);
    })

    test('renders NotificationItem elements', () => {
        const dummyNotifications = [
          { type: 'default', html: { __html: 'Test 1' }, value: 'Test 1' },
          { type: 'info', html: { __html: 'Test 2' }, value: 'Test 2' },
          { type: 'success', html: { __html: 'Test 3' }, value: 'Test 3' },
        ];
        const wrapper = shallow(<Notifications notifications={dummyNotifications} />);
        const notificationItems = wrapper.find(NotificationItem);
        expect(notificationItems.length).toBe(dummyNotifications.length);
      });

      test('renders the first NotificationItem element with the right HTML', () => {
        const dummyNotifications = [
          { type: 'default', html: { __html: '<b>Test 1</b>' }, value: 'Test 1' },
          { type: 'info', html: { __html: '<i>Test 2</i>' }, value: 'Test 2' },
          { type: 'success', html: { __html: '<u>Test 3</u>' }, value: 'Test 3' },
        ];
    
        const wrapper = shallow(<Notifications notifications={dummyNotifications} />);
        const notificationItems = wrapper.find(NotificationItem);
        expect(notificationItems.length).toBe(dummyNotifications.length);
    
        const firstNotificationItem = notificationItems.first();
        expect(firstNotificationItem.prop('html')).toEqual({ __html: '<b>Test 1</b>' });
      });

      test('calls the markAsRead function with the right message', () => {
        const spyConsoleLog = jest.spyOn(console, 'log');
        const dummyNotifications = [
          { type: 'default', html: { __html: 'Test 1' }, value: 'Test 1' },
          { type: 'info', html: { __html: 'Test 2' }, value: 'Test 2' },
        ];
        const wrapper = shallow(<Notifications displayDrawer notifications={dummyNotifications} />);
    
        const instance = wrapper.instance();
        instance.markAsRead(1);
    
        expect(spyConsoleLog).toHaveBeenCalledWith('Notification 1 has been marked as read.');
        spyConsoleLog.mockRestore();
      });
    });
