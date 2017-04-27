import { cancel, cancelled, fork, take, takeEvery, takeLast, call, put } from 'redux-saga/effects'
import actionNames from '../actions'
import * as actionFactory from '../actions'
import * as firebase from '../api';

function * requestRide(action) {
	try {
		var { eventID } = action.payload
		yield call( firebase.push, "events/" + eventID + "/rides",  action.payload)
	} catch(e) {
		alert(e)
	}
}

function * removeRide(action) {
	try {
		var { eventID } = action.payload
    var { key } = action.payload
		yield call( firebase.remove, "events/" + eventID + "/rides" + key,  action.payload)
	} catch(e) {
		alert(e)
	}
}

function * removeDriver(action) {
	try {
		var { eventID } = action.payload
    var { key } = action.payload
		yield call( firebase.remove, "events/" + eventID + "/driver" + key,  action.payload)
	} catch(e) {
		alert(e)
	}
}

function * addDriver(action) {
	try {
		var { eventID } = action.payload
		yield call( firebase.push, "events/" + eventID + "/drivers",  action.payload)
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

function * getQueueSize( action ) {
	try {
		var { eventID } = action.payload
    var {data} = action.payload
		var snapshot = yield call( firebase.getAll, "events/" + eventID + "/" + data)
		var numChildren = snapshot.numChildren();
    alert(numChildren);
		yield put(actionFactory.receiveQueueSize({numChildren: numChildren} ))
	} catch (error) {
		alert(error)
		yield put(actionFactory.receiveQueueSize(error))
	}
}

function * startSync(path, finishAction) {
	try {
		const updateChannel = firebase.createEventChannel(path)
		while(true) {
			const rides = yield take(updateChannel)
			var result = [];
			for(var i in rides)
			    result.push(rides[i]);
			yield put(finishAction({rides: result}))
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

//takes in an action with data and a path ex. path = /events, data = eventID;
//and yields true if data exists at that path, and false if not
function * verifyData(action) {
    var {data} = action.payload;
    var {path} = action.payload;
    var snapshot = yield call(firebase.verifyData, path +data)
		var database_data = snapshot.val();
    alert(database_data);
    if(database_data != null){
		yield put(actionFactory.receiveVerification({verify: 'true'}))
    }
    else{
		yield put(actionFactory.receiveVerification({verify: 'false'}))
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

function * watchAddDriver() {
	try {
		yield takeEvery(actionNames.ADD_DRIVER, addDriver)
	} catch (error) {
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

function * watchRemoveDriver() {
	try {
		yield takeEvery(actionNames.REMOVE_DRIVER, removeDriver)
	} catch (error) {
		alert(error)
	}
}

function * watchRemoveRide() {
	try {
		yield takeEvery(actionNames.REMOVE_RIDE, removeRide)
	} catch (error) {
		alert(error)
	}
}

export default function* root() {
	try {
		yield fork(watchStartUpdates)
		yield fork(watchRequestRide)
		yield fork(watchRemoveRide)
		yield fork(watchRemoveDriver)
		yield fork(watchAddDriver)
		yield fork(watchRequestQueue)
	} catch (error) {
		alert(error)
	}
}
