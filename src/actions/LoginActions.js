import { 
    LOGIN_EMAIL_CHANGED, 
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';
const axios = require('axios');

export const loginEmailChanged = (text) => {
    return {
        type: LOGIN_EMAIL_CHANGED,
        payload: text
    };
};

export const loginPasswordChanged = (text) => {
    return {
        type: LOGIN_PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    console.log(email);
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
    };
};

const loginUserFailed = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = ( dispatch, user ) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};
