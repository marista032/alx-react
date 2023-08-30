import { bindActionCreators } from "redux";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

export function login(email, password) {
    return {
        type: LOGIN,
        payload: {
            user: {
                email,
                password
            }
        }
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}

export function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
}

export function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    };
}

export const login = bindActionCreators(login, dispatch);
export const logout = bindActionCreators(logout, dispatch);
export const displayNotificationDrawer = bindActionCreators(
    displayNotificationDrawer, 
    dispatch
    );
export const hideNotificationDrawer = bindActionCreators(
    hideNotificationDrawer, 
    dispatch
    );