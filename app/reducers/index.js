import { combineReducers } from 'redux';

import queue from './queue';
import user from './user';

const rootReducer = combineReducers({
    queue,
    user
});

const getUser = state => state.user

export default rootReducer;
