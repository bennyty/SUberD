import { fork } from 'redux-saga/effects'
import auth from './fireBaseAuth'
import queue from './queue'

// Compose sub-sagas
export default function* root() {
	yield fork(auth)
	yield fork(queue)
}
