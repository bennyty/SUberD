import { createAction } from 'redux-actions'

// Default exports are the constants.
// Import as: import actionNames from '../actions'
const actionNames = { REQUEST_RIDE: "REQUEST_RIDE",
                      REQUEST_QUEUE: "REQUEST_QUEUE",
                      CREATE_EVENT: "CREATE_EVENT",
                      ADD_DRIVER: "ADD_DRIVER",
                      REMOVE_RIDE: "REMOVE_RIDE",
                      REQUEST_SIGN_IN: "REQUEST_SIGN_IN",
                      RECEIVE_SIGN_IN: "RECEIVE_SIGN_IN",
                      START_QUEUE_UPDATES: "START_QUEUE_UPDATES",
                      STOP_QUEUE_UPDATES: "STOP_QUEUE_UPDATES",
                      RECEIVE_QUEUE: "RECEIVE_QUEUE",
                      RECEIVE_QUEUE_SIZE: "RECEIVE_QUEUE_SIZE",
                      VERIFY_DATA: "VERIFY_DATA" ,
                      GET_QUEUE_SIZE: "GET_QUEUE_SIZE",
                      RECEIVE_VERIFICATION: "RECEIVE_VERIFICATION",
                      REMOVE_DRIVER: "REMOVE_DRIVER",
                      SET_USER_NAME: "SET_USER_NAME",
                      SET_USER_PHONENUMBER: "SET_USER_PHONENUMBER"
					  }
export default actionNames;

export const removeRide         = createAction(actionNames.REMOVE_RIDE)
export const removeDriver       = createAction(actionNames.REMOVE_DRIVER)

export const setUserName        = createAction(actionNames.SET_USER_NAME)
export const setUserPhoneNumber = createAction(actionNames.SET_USER_PHONENUMBER)
// The follow is a list of 'actionCreators': Exported factories that return a
// Flux Standard Action: (https://github.com/acdlite/flux-standard-action) using the module:
// redux-actions:        (https://github.com/acdlite/redux-actions)

export const requestSignIn     = createAction(actionNames.REQUEST_SIGN_IN)
export const startQueueUpdates = createAction(actionNames.START_QUEUE_UPDATES)
export const stopQueueUpdates  = createAction(actionNames.STOP_QUEUE_UPDATES)
export const receiveSignIn     = createAction(actionNames.RECEIVE_SIGN_IN)
export const receiveQueue      = createAction(actionNames.RECEIVE_QUEUE, null , () => ({
	receivedAt: Date.now()
}))

export const receiveQueueSize      = createAction(actionNames.RECEIVE_QUEUE_SIZE, (payload) => ({
	...payload
}))

export const receiveVerification      = createAction(actionNames.RECEIVE_VERIFICATION, (payload) => ({
	...payload
}))

export const requestRide       = createAction(actionNames.REQUEST_RIDE)
export const createEvent       = createAction(actionNames.CREATE_EVENT)
export const requestQueue      = createAction(actionNames.REQUEST_QUEUE)
export const verifyData        = createAction(actionNames.VERIFY_DATA)
export const addDriver         = createAction(actionNames.ADD_DRIVER)
export const getQueueSize      = createAction(actionNames.GET_QUEUE_SIZE)


