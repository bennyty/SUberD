import { take, takeEvery, takeLast, call, put } from 'redux-saga/effects'
import database from '../api';
import actionNames from '../actions'
import * as actionFactory from '../actions'
import { create, get, getAll, push, remove, update, sync } from 'firebase-saga'


// function* a() {
	// yield put(requestRide)
	// //Import Admin SDK
	// var db = firebase.database();
	// var ref = db.ref("riders/");
	// var usersRef = ref.child("riders");
	// usersRef.set({
	// 	person: {
	// 		phonenumber: user.phoneNumber,
	// 		name:        user.name,
	// 		pickup:      pickup,
	// 		dropoff:     dropoff,
	// 		numRiders:   numRiders,
	// 		comment:     comment,
	// 		reqeustedAt: Date.now()
	// 	}
	// });
// }

// function* b() {
// 	var db = firebase.database();
// 	var ref = db.ref("Riders");
// 	red.orderByChild("eventID").equalTo(eventID).on("child_added").then(function(snapshot)
// 	{
// 	// The Promise was "fulfilled" (it succeeded).
// 		const queue = snapshot.val();
// 		return queue;
// 	}, function(error) {
// 		// The Promise was rejected.
// 		console.error(error);
// 		return 0;
// 	})
// }

// function* authorize(user = undefined, password = undefined) {
// 	if (!user || !password) {
// 		yield call(firebase.authorize, user, password)
// 		yield put()
// 	}
// }

function * fetchQueue( action ) {
	try {
		const eventID = action.payload.eventID
		const fakeRides = [{id: 1, source: "10th street"}, {id: 2, source: "Potato road"}]
		// const rides = yield call( getAll , ("events" + eventID + "/rides"))
		const rides = fakeRides
		yield put(actionFactory.receiveQueue(rides))
	} catch (error) {
		yield put(actionFactory.receiveQueue(error))
	}
}

function * requestRide() {
	yield call( push )
}

// ************************Watchers**************************

function * watchRequestQueue() {
	try {
		yield takeEvery(actionNames.REQUEST_QUEUE, fetchQueue)
	} catch(error) {
		console.error(error + actionNames)
	}
}

function * watchRequestRide() {
	try {
		yield takeEvery(actionNames.REQUEST_RIDE, requestRide)
	} catch (error) {
		alert(error)
	}
}

// function* loginFlow() {
// 	while (true) {
// 		const {user, password} = yield take('LOGIN_REQUEST')
// 		// fork returns a Task object
// 		const task = yield fork(authorize, user, password)
// 		const action = yield take(['LOGOUT', 'LOGIN_ERROR'])
// 		if (action.type === 'LOGOUT')
// 			yield cancel(task)
// 		yield call(Api.clearItem, 'token')
// 	}
// }

export default function* root() {
	// yield [
	// 	fork(watchRequestQueue)
	// 	// fork(watchRequestRide)
	// ]
	yield [
		takeEvery(actionNames.REQUEST_QUEUE, fetchQueue)
	]
}
