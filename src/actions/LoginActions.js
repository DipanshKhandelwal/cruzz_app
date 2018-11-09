import { 
    LOGIN_EMAIL_CHANGED,
    LOGIN_USERNAME_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT
} from './types';
const axios = require('axios');
import { REST_URL } from '../UI/values/strings.js';

export const loginEmailChanged = (text) => {
    return {
        type: LOGIN_EMAIL_CHANGED,
        payload: text
    };
};

export const loginUsernameChanged = (text) => {
    return {
        type: LOGIN_USERNAME_CHANGED,
        payload: text
    };
};

export const loginPasswordChanged = (text) => {
    return {
        type: LOGIN_PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, username, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        axios.post(
            "https://cruzz.herokuapp.com/api/authentication/users/login",
            {
                "user": {
                    // email: email,
                    username: username,
                    password: password
                }
            }
        )
        .then((response)=>{
            axios.defaults.headers.common['Authorization'] = 'Token '+response.data.user.token;
            axios.get(
                `https://cruzz.herokuapp.com/api/profile/retrieve/${response.data.user.username}/`
            ).then(
                (response) => {
                    loginUserSuccess(dispatch,{
                        user: response.data.user,
                        profile: response.data.profile,
                    });
                    console.log(response.data);
                })
                .catch((error)=>{
                    console.log("error", error)
                    loginUserFailed(dispatch)
                })
        })
        .catch((error)=>{
            console.log("error", error)
            loginUserFailed(dispatch)
        })
    }
};

const loginUserFailed = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = ( dispatch, data ) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: data
    });
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};
