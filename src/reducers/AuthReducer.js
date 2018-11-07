import {
    // LOGIN
    LOGIN_EMAIL_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    // SIGN UP
    SIGN_UP_EMAIL_CHANGED,
    SIGN_UP_USERNAME_CHANGED,
    SIGN_UP_PASSWORD_CHANGED,
    SIGN_UP_CONFIRM_PASSWORD_CHANGED,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAIL,
    SIGN_UP_USER
} from '../actions/types';

const INITIAL_STATE = {
    // LOGIN
    loginEmail: '',
    loginPassword: '',
    loginError: '',
    loginLoading: false,
    // SIGN UP
    signUpEmail: '',
    signUpUsername: '',
    signUpPassword: '',
    signUpConfirmPassword: '',
    signUpError: '',
    signUpLoading: false,
    // COMMON
    user: null,
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {

        // LOGIN
        case LOGIN_EMAIL_CHANGED:
            return {...state, loginEmail: action.payload};

        case LOGIN_PASSWORD_CHANGED:
            return {...state, loginPassword: action.payload};

        case LOGIN_USER:
            return {...state, loginLoading: true, loginError: ''};

        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload};
            
        case LOGIN_USER_FAIL:
            return {...state, loginError: 'Authentication Failed', loginPassword: '', loginLoading: false};

        
        // SIGN UP
        case SIGN_UP_EMAIL_CHANGED:
            return {...state, signUpEmail: action.payload};

        case SIGN_UP_USERNAME_CHANGED:
            return {...state, signUpUsername: action.payload};

        case SIGN_UP_PASSWORD_CHANGED:
            return {...state, signUpPassword: action.payload};

        case SIGN_UP_CONFIRM_PASSWORD_CHANGED:
            return {...state, signUpConfirmPassword: action.payload};

        case SIGN_UP_USER:
            return {...state, signUpLoading: true, signUpError: ''};

        case SIGN_UP_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload};
            
        case SIGN_UP_USER_FAIL:
            return {...state, signUpError: 'Authentication Failed', signUpPassword: '', signUpLoading: false};


        default:
            return state;
    }
};
