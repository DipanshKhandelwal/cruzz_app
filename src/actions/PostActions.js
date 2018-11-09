import {
    POST_TITLE_CHANGED,
    POST_BODY_CHANGED,
    POST_DESCRIPTION_CHANGED,
    FEED_FETCH,
    ALL_POSTS_CREATED,
    POSTING,
    POST_SUCCESS,
    RESET_POST_FORM,
    LOADING_ALL_POSTS_CREATED,
    LOADING_FEED
} from './types';
const axios = require('axios');

export const postDescriptionChanged = (text) => {
    return {
        type: POST_DESCRIPTION_CHANGED,
        payload: text
    };
};

export const postBodyChanged = (text) => {
    return {
        type: POST_BODY_CHANGED,
        payload: text
    };
};

export const postTitleChanged = (text) => {
    return {
        type: POST_TITLE_CHANGED,
        payload: text
    };
};

export const postReset = () => {
    return {
        type: RESET_POST_FORM,
    };
};

export const createPost = ({ description, title, body, user }) => {
    console.log(description, title, body, user)
    return (dispatch) => {
        dispatch({ type: POSTING });
        axios.defaults.headers.common['Authorization'] = 'Token '+user.token;
        axios.post(
            `https://cruzz.herokuapp.com/api/post/create/`,
            {
                "post": {
                    description: description,
                    body: body,
                    title: title,
                    tagList: []
                }
            }
        )
        .then((response)=>{
            console.log(response.data)
            dispatch({
                type: POST_SUCCESS,
                payload: response.data.post
            });
        })
        .catch((error)=>{
            console.log("error", error)
            loginUserFailed(dispatch)
        })
    };
};

export const fetchFeed = ({ token }) => {
    return (dispatch) => {
        dispatch({ type: LOADING_FEED });
        axios.defaults.headers.common['Authorization'] = 'Token '+token;
        axios.get(
            `https://cruzz.herokuapp.com/api/post/feed/?limit=20&offset=0`,
        )
        .then((response)=>{
            console.log(response.data)
            dispatch({
                type: FEED_FETCH,
                payload: response.data.posts
            });
        })
        .catch((error)=>{
            console.log("error", error)
            loginUserFailed(dispatch)
        })
    };
};

export const fetchAllPostCreated = ({ token, username }) => {
    return (dispatch) => {
        dispatch({ type: LOADING_ALL_POSTS_CREATED });
        axios.defaults.headers.common['Authorization'] = 'Token '+token;
        axios.get(
            `https://cruzz.herokuapp.com/api/post/view/?limit=100&offset=0&author=${username}`,
        )
        .then((response)=>{
            console.log(response.data)
            dispatch({
                type: ALL_POSTS_CREATED,
                payload: response.data.posts
            });
        })
        .catch((error)=>{
            console.log("error", error)
            loginUserFailed(dispatch)
        })
    };
};

