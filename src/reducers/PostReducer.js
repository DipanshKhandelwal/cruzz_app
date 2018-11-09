import {
    // LOGIN
    POST_DESCRIPTION_CHANGED,
    POST_BODY_CHANGED,
    POST_TITLE_CHANGED,
    POSTING,
    POST_SUCCESS,
    RESET_POST_FORM
} from '../actions/types';

const INITIAL_STATE = {
    description: '',
    body: '',
    title: '',
    loading: false,
    post: null
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {

        case POST_DESCRIPTION_CHANGED:
            return {...state, description: action.payload};
        
        case POST_BODY_CHANGED:
            return {...state, body: action.payload};

        case POST_TITLE_CHANGED:
            return {...state, title: action.payload};

        case POSTING:
            return {...state, loading: true}

        case RESET_POST_FORM:
            return {...state, ...INITIAL_STATE}

        case POST_SUCCESS:
            return { ...state, ...INITIAL_STATE, post: action.payload }

        default:
            return state;
    }
};
