import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import FeedReducer from './FeedReducer'

export default combineReducers({
    auth: AuthReducer,
    profile: ProfileReducer,
    feed: FeedReducer,
});
