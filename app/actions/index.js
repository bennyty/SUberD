
import { createAction } from 'redux-actions'

// Default exports are the constants.
// Import as: import actionNames from '../actions'
export default actionNames;
const actionNames = { REQUEST_RIDE  : "REQUEST_RIDE",
                      REQUEST_QUEUE : "REQUEST_QUEUE",
                      CREATE_EVENT  : "CREATE_EVENT",
					  REMOVE_RIDE   : "REMOVE_RIDE",
					  RECEIVE_QUEUE : "RECEIVE_QUEUE"
					  }

export const requestRide = (pickup, dropoff, numRiders, comment, user) => {
	return createAction(actionNames.REQUEST_RIDE,
						(pickup, dropoff, numRiders, comment, user) => ({pickup, dropoff, numRiders, comment, user}))
};

export const createEvent = (eventName, eventID) => ({
	type: CREATE_EVENT,
	eventName,
	eventID,
	createdAt: Date.now()
	//even password
});

export const removeRider = () => ({
	type: REMOVE_RIDE,
	//removes the rider by that name from the queue, send event ID as well
});


export const requestQueue = (eventID) => {
};


//get height to mainitain scroll at top/bottom
export const updateQueueHeight = (event) => {
	const layout = event.nativeEvent.layout;
	return {
		type: 'UPDATE_MESSAGES_HEIGHT',
		height: layout.height
	}
};


//login actions
export const login = () => {
    return function (dispatch) {
        dispatch(startAuthorizing());

        firebase.auth()
                .signInAnonymously()
                .then(() => {
                    dispatch(userAuthorized());
                    dispatch(fetchMessages());
                });
    }
}

export const startAuthorizing = () => ({
    type: 'USER_START_AUTHORIZING'
});

export const userAuthorized = () => ({
    type: 'USER_AUTHORIZED'
});
