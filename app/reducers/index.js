import { combineReducers } from 'redux';

import queue from './queue';
import user from './user';

// Simply import the two sub reducers and compose them
const rootReducer = combineReducers({
    queue,
    user
});

const getUser = state => state.user

export default rootReducer;
