import {
    FEED_FETCH,
    LOADING_FEED
} from '../actions/types';

const INITIAL_STATE = {
    feed: '',
    loading: false
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {

        case FEED_FETCH:
            return {...state, feed: action.payload, loading: false};

        case LOADING_FEED:
            return {...state, loading: true};

        default:
            return state;
    }
};
