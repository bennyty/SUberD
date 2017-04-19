import { fork, take, takeEvery, takeLast, call, put } from 'redux-saga/effects'
import actionNames from '../actions'
import * as actionFactory from '../actions'
import * as firebase from '../api';

function * requestRide(action) {
	try {
    var { eventID } = action.payload
    yield call( firebase.push, "events/" + eventID + "/rides",  action)
	} catch(e) {
		alert(e)
	}
}

function * fetchQueue( action ) {
	try {
    var { eventID } = action.payload
		// const fakeRides = [{"comment":"NA", "dropoff":"HOME", "num_passengers":"1", "pickup":"RSE", "user":{"first_name":"TJ","last_name":"Passaro"}}, {"comment":"NA", "dropoff":"HOME", "num_passengers":"1", "pickup":"2347 17th street", "user":{"first_name":"Ben","last_name":"Espey"}}]
		// const rides = yield call( getAll , ("events" + eventID + "/rides"))
		var snapshot = yield call( firebase.getAll, "events/" + eventID + "/rides")
    var rides = snapshot.val();

		yield put(actionFactory.receiveQueue({rides: rides}))
	} catch (error) {
      alert(error)
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
