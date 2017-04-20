import { cancel, cancelled, fork, take, takeEvery, takeLast, call, put } from 'redux-saga/effects'
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
	alert("ran fetch queue")
	try {
		var { eventID } = action.payload
		var snapshot = yield call( firebase.getAll, "events/" + eventID + "/rides")
		var rides = snapshot.val();
		yield put(actionFactory.receiveQueue({rides: rides}))
	} catch (error) {
		alert(error)
		yield put(actionFactory.receiveQueue(error))
	}
}

function * startQueueSync(action) {
	try {
		var { eventID } = action.payload
		const updateChannel = firebase.createEventChannel("events/" + eventID + "/rides")
		while(true) {
			const rides = yield take(updateChannel)
			console.log("Got Ride" + JSON.stringify(rides))
			yield put(actionFactory.receiveQueue({rides: rides}))
		}
	} catch (error) {
		alert(error)
		yield put(actionFactory.receiveQueue(error))
	} finally {
		if (yield cancelled()) {
		  updateChannel.close()
		  // console.log('countdown cancelled')
		}
	}
}


// *********************** Watchers *************************
function * watchStartUpdates() {
	try {
		while(true) {
			const action = yield take(actionNames.START_QUEUE_UPDATES)
			var task = yield fork(startQueueSync, action)
			yield take(actionNames.STOP_QUEUE_UPDATES)
			cancel(task)
		}
	} catch(error) {
		alert(error)
	}
}

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
		yield fork(watchStartUpdates)
		yield fork(watchRequestRide)
		yield fork(watchRequestQueue)
	} catch (error) {
		alert(error)
	}
}
