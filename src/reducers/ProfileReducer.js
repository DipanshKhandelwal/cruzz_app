import {
    FOLLOWERS_SUCCESS,
    FOLLOWING_SUCCESS,
    ALL_POSTS_CREATED,
    POST_CREATE,
    LOADING_ALL_POSTS_CREATED
} from '../actions/types';

const INITIAL_STATE = {
    followers: null,
    following: null,
    posts: null,
    loading: false,
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {

        case FOLLOWING_SUCCESS:
            return {...state, following: action.payload};

        case FOLLOWERS_SUCCESS:
            return {...state, followers: action.payload};

        case ALL_POSTS_CREATED:
            return {...state, posts: action.payload, loading: false};

        case POST_CREATE:
            return {...state};

        case LOADING_ALL_POSTS_CREATED:
            return {...state, loading: true};

        default:
            return state;
    }
};
