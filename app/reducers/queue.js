import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions'
import actionNames from '../actions';

// This will be returned as the initial state of the state subtree
const initialState = {
    isFetching: false,
    lastFetched: null,
	rides: []
}

// This pure function defines how to take an action and the current state and return the new state
const queue = handleActions({
	[actionNames.REQUEST_RIDE]: {
		next(state, action) {
            return Object.assign({}, state, {
                isFetching: true
            });
		}
	},
	[actionNames.RECEIVE_QUEUE]: {
		next(state, action) {
			return Object.assign({}, state, {
				isFetching: false,
				rides: action.payload.rides,
				lastFetched: action.meta.receivedAt
			})
		}
	}
}, initialState);


// Replaced above by handleActions from redux-actions

// const queue = (state = initialState, action) => {
//     switch (action.type) {
//         case actionNames.REQUEST_RIDE:
//             return Object.assign({}, state, {
//                 isFetching: true
//             });
//         case actionNames.RECEIVE_QUEUE:
//             return Object.assign({}, state, {
//                 isFetching: false,
// 				lastFetched: action.payload.receivedAt,
// 				rides: action.payload.rides
//             })
//         default:
//             return state
//     }
// }

export default queue;
