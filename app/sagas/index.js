import { fork } from 'redux-saga/effects'
import auth from './fireBaseAuth'
import queue from './queue'

export default function* root() {
	// yield [
	// 	fork(watchRequestQueue)
	// 	// fork(watchRequestRide)
	// ]

	// yield [
	// 	takeEvery(actionNames.REQUEST_QUEUE, fetchQueue)
	// ]

	yield fork(auth)
	yield fork(queue)
}
