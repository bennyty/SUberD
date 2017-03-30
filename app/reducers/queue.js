import { combineReducers } from 'redux';
import actionNames from '../actions';

const initialState = {
    isFetching: false,
    lastFetched: null,
	rides: []
}

const queue = (state = initialState, action) => {
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
        default:
            return state
    }
}

export default queue;
