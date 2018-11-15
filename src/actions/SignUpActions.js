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
import { REST_URL } from '../UI/values/strings.js';
import { ToastAndroid } from "react-native";

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

export const signUpUser = ({ email, username, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGN_UP_USER });
        console.log("email", email)
        console.log("username", username)
        console.log("password", password)
        axios.post(
            "https://cruzz.herokuapp.com/api/authentication/users/registration",
            {
                "user": {
                    email: email,
                    username: username,
                    password: password
                }
            }
        )
        .then((response)=>
        {
            signUpUserSuccess(dispatch,{
                user: null,
                profile: null,
            });
        }
        )
        .catch((error)=>{
            console.log("error", error)
            signUpUserFailed(dispatch)
        })
    }
};

const signUpUserFailed = (dispatch) => {
    dispatch({ type: SIGN_UP_USER_FAIL });
};

const signUpUserSuccess = ( dispatch, user ) => {
    ToastAndroid.show(' Confirm your email address ', ToastAndroid.SHORT);
    dispatch({
        type: SIGN_UP_USER_SUCCESS,
        payload: user
    });
};
