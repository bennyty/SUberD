import { createAction } from 'redux-actions'

// Default exports are the constants.
// Import as: import actionNames from '../actions'
const actionNames = { REQUEST_RIDE: "REQUEST_RIDE",
                      REQUEST_QUEUE: "REQUEST_QUEUE",
                      CREATE_EVENT: "CREATE_EVENT",
                      REMOVE_RIDE: "REMOVE_RIDE",
                      REQUEST_SIGN_IN: "REQUEST_SIGN_IN",
                      RECEIVE_SIGN_IN: "RECEIVE_SIGN_IN",
                      START_QUEUE_UPDATES: "START_QUEUE_UPDATES",
                      STOP_QUEUE_UPDATES: "STOP_QUEUE_UPDATES",
                      RECEIVE_QUEUE: "RECEIVE_QUEUE",
                      VERIFY_DATA: "VERIFY_DATA"
					  }
export default actionNames;

export const requestSignIn     = createAction(actionNames.REQUEST_SIGN_IN)
export const startQueueUpdates = createAction(actionNames.START_QUEUE_UPDATES)
export const stopQueueUpdates  = createAction(actionNames.STOP_QUEUE_UPDATES)
export const receiveSignIn     = createAction(actionNames.RECEIVE_SIGN_IN)
export const receiveQueue      = createAction(actionNames.RECEIVE_QUEUE, (payload) => ({
	...payload,
	receivedAt: Date.now()
}))
export const requestRide       = createAction(actionNames.REQUEST_RIDE)
export const removeRide        = createAction(actionNames.REMOVE_RIDE)
export const requestQueue      = createAction(actionNames.REQUEST_QUEUE)
export const verifyData        = createAction(actionNames.VERIFY_DATA)

export const createEvent = createAction(actionNames.CREATE_EVENT, (eventName, eventID) => ({
	eventName,
	eventID,
	createdAt: Date.now()
	//even password
}));

