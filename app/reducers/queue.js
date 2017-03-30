
import { combineReducers } from 'redux';
import actionNames from '../actions';

const initialState = {
    isFetching: false,
    lastFetched: null,
	rides: []
}

const meta = (state = initialState, action) => {
    switch (action.type) {
        case actionNames.REQUEST_RIDE:
            return Object.assign({}, state, {
                isFetching: true
            });
        case actionNames.RECEIVE_QUEUE:
            return Object.assign({}, state, {
                isFetching: false,
				lastFetched: action.payload.receivedAt,
				rides: action.payload.rides
            });
        case 'UPDATE_MESSAGES_HEIGHT':
            return Object.assign({}, state, {
                height: action.height
            });
        default:
            return state
    }
}

const queue = combineReducers({
    meta
});

export default queue;
