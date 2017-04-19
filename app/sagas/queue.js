import { fork, take, takeEvery, takeLast, call, put } from 'redux-saga/effects'
import actionNames from '../actions'
import * as actionFactory from '../actions'
import * as firebase from '../api';
import { create, get, getAll, push, remove, update, sync } from 'firebase-saga'

function * requestRide(action) {
	try {
		yield call( firebase.insert, "potato",  action)
	} catch(e) {
		alert(e)
	}
}

function * fetchQueue( action ) {
	try {
		const eventID = action.payload.eventID
		// const fakeRides = [{"comment":"NA", "dropoff":"HOME", "num_passengers":"1", "pickup":"RSE", "user":{"first_name":"TJ","last_name":"Passaro"}}, {"comment":"NA", "dropoff":"HOME", "num_passengers":"1", "pickup":"2347 17th street", "user":{"first_name":"Ben","last_name":"Espey"}}]
		// const rides = yield call( getAll , ("events" + eventID + "/rides"))
		alert("before" + eventID)
		const rides = yield call( getAll , "/" )
		alert("after" + eventID)
		// const rides = fakeRides
		yield put(actionFactory.receiveQueue({rides: rides}))
	} catch (error) {
		yield put(actionFactory.receiveQueue(error))
	}
}


// ************************Watchers**************************
function * watchRequestQueue() {
	try {
		yield takeEvery(actionNames.REQUEST_QUEUE, fetchQueue)
	} catch(error) {
		alert(error)
	}
}
function * watchRequestRide() {
	try {
		yield takeEvery(actionNames.REQUEST_RIDE, requestRide)
	} catch (error) {
		alert(error)
	}
}

export default function* root() {
	try {
		yield fork(watchRequestRide)
		yield fork(watchRequestQueue)
	} catch (error) {
		alert(error)
	}
}
