import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FeedReducer from './FeedReducer'

export default combineReducers({
    auth: AuthReducer,
    feed: FeedReducer,
});
