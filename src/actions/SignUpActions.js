import { 
    SIGN_UP_EMAIL_CHANGED,
    SIGN_UP_USERNAME_CHANGED,
    SIGN_UP_PASSWORD_CHANGED,
    SIGN_UP_CONFIRM_PASSWORD_CHANGED,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAIL,
    SIGN_UP_USER
} from './types';
const axios = require('axios');

export const signUpEmailChanged = (text) => {
    return {
        type: SIGN_UP_EMAIL_CHANGED,
        payload: text
    };
};

export const signUpUsernameChanged = (text) => {
    return {
        type: SIGN_UP_USERNAME_CHANGED,
        payload: text
    };
};

export const signUpPasswordChanged = (text) => {
    return {
        type: SIGN_UP_PASSWORD_CHANGED,
        payload: text
    };
};

export const signUpConfirmPasswordChanged = (text) => {
    return {
        type: SIGN_UP_CONFIRM_PASSWORD_CHANGED,
        payload: text
    };
};

export const signUpUser = ({ email, password }) => {
    console.log(email);
    console.log(password);
    return (dispatch) => {
        dispatch({ type: SIGN_UP_USER });
    };
};

const signUpUserFailed = (dispatch) => {
    dispatch({ type: SIGN_UP_USER_FAIL });
};

const signUpUserSuccess = ( dispatch, user ) => {
    dispatch({
        type: SIGN_UP_USER_SUCCESS,
        payload: user
    });
};
