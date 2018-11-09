import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import FeedReducer from './FeedReducer'
import PostReducer from './PostReducer';

export default combineReducers({
    auth: AuthReducer,
    profile: ProfileReducer,
    feed: FeedReducer,
    post: PostReducer,
});
