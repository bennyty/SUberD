import { combineReducers } from 'redux';

import queue from './queue';
import user from './user';

const rootReducer = combineReducers({
    queue,
    user
});

export default rootReducer;
