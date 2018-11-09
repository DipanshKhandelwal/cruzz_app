import { FOLLOWERS_SUCCESS, FOLLOWING_SUCCESS } from './types';
const axios = require('axios');

export const fetchFollowing = ({ token, username }) => {
    return (dispatch) => {
        axios.defaults.headers.common['Authorization'] = 'Token '+token;
        axios.get(
            `https://cruzz.herokuapp.com/api/profile/following/?user=${username}&limit=100&offset=0`,
        )
        .then((response)=>{
            console.log(response.data)
            dispatch({
                type: FOLLOWING_SUCCESS,
                payload: response.data.profiles
            });
        })
        .catch((error)=>{
            console.log("error", error)
            loginUserFailed(dispatch)
        })
    };
};

export const fetchFollowers = ({ token, username }) => {
    return (dispatch) => {
        axios.defaults.headers.common['Authorization'] = 'Token '+token;
        axios.get(
            `https://cruzz.herokuapp.com/api/profile/followers/?user=${username}&limit=100&offset=0`,
        )
        .then((response)=>{
            console.log(response.data)
            dispatch({
                type: FOLLOWERS_SUCCESS,
                payload: response.data.profiles
            });
        })
        .catch((error)=>{
            console.log("error", error)
            loginUserFailed(dispatch)
        })
    };
};
