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

function * startSync(path, finishAction) {
	try {
		const updateChannel = firebase.createEventChannel(path)
		while(true) {
			const rides = yield take(updateChannel)
			yield put(finishAction({rides: rides}))
		}
	} catch (error) {
		yield put(finishAction(error))
		alert(error)
	} finally {
		if (yield cancelled()) {
		  updateChannel.close()
		}
	}
}

function * startRideSync(action) {
	var { eventID, rideID } = action.payload
	const path = "events/" + eventID + "/rides/" + ridesID
	const fun = actionFactory.receiveQueue
	yield call(startSync, path, fun)
}

function * startQueueSync(action) {
	var { eventID } = action.payload
	const path = "events/" + eventID + "/rides"
	const fun = actionFactory.receiveQueue
	yield call(startSync, path, fun)
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
