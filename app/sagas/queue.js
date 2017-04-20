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

function * addDriver(action) {
	try {
		var { eventID } = action.payload
		yield call( firebase.push, "events/" + eventID + "/drivers",  action)
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

//takes in an action with data and a path ex. path = /events, data = eventID;
//and yields true if data exists at that path, and false if not
function * verifyData(action) {
	try {
    var {data} = action.payload;
    var {path} = action.payload;
    var snapshot = yield call(firebase.verifyData, path +data)
		var database_data = snapshot.val();
    alert(snapshot.val());
    if(snapshot.val() != null){
      alert("TRUE");
      yield true;
    }
    else{
      alert("False");
      yield false;
    }
	} catch (error) {
		alert(error)
		yield error
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
    yield takeEvery(actionNames.GET_QUEUE_SIZE, getQueueSize)
		yield fork(watchStartUpdates)
		yield fork(watchRequestRide)
		yield fork(watchRequestQueue)
	} catch (error) {
		alert(error)
	}
}
