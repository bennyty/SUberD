import { take, takeEvery, takeLast, call, put } from 'redux-saga/effects'
import database from '../api';


function* a() {
	yield put(createAction())

	//Import Admin SDK
	var db = firebase.database();
	var ref = db.ref("riders/");
	var usersRef = ref.child("riders");
	usersRef.set({
		person: {
			phonenumber: user.phoneNumber,
			name:        user.name,
			pickup:      pickup,
			dropoff:     dropoff,
			numRiders:   numRiders,
			comment:     comment,
			reqeustedAt: Date.now()
		}
	});
}

function* b() {
	var db = firebase.database();
	var ref = db.ref("Riders");
	red.orderByChild("eventID").equalTo(eventID).on("child_added").then(function(snapshot)
	{
	// The Promise was "fulfilled" (it succeeded).
		const queue = snapshot.val();
		return queue;
	}, function(error) {
		// The Promise was rejected.
		console.error(error);
		return 0;
	})
}

function* authorize(user = undefined, password = undefined) {
	if (!user || !password) {
		yield call(firebase.authorize, user, password)
		yield put()
	}
}

function* loginFlow() {
	while (true) {
		const {user, password} = yield take('LOGIN_REQUEST')
		// fork returns a Task object
		const task = yield fork(authorize, user, password)
		const action = yield take(['LOGOUT', 'LOGIN_ERROR'])
		if (action.type === 'LOGOUT')
			yield cancel(task)
		yield call(Api.clearItem, 'token')
	}
}
