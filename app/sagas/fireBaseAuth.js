import { fork, call, put, take, select } from 'redux-saga/effects';
import firebase from '../api'
import actionNames from '../actions'
import {
  requestSignIn, receiveSignIn
} from '../actions';
// REQUEST_USERNAME, requestUsername, setUsername,

function signIn() {
  return firebase.auth().signInAnonymously()
    .then(user => ({ user }))
    .catch(error => ({ error }));
}

function* handleRequestSignIn() {
  while (true) {
	try {
		yield take(actionNames.REQUEST_SIGN_IN);
		const { user, error } = yield call(signIn);
		if (user && !error) {
		  yield put(receiveSignIn(user));
		  // yield put(requestUsername());
		} else {
		  yield put(receiveSignIn(error));
		}
	} catch(error) {
		alert(error)
	}
  }
}

// function* handleRequestUsername() {
//   while (true) {
//     yield take(REQUEST_USERNAME);
//     const username = prompt('Please input username or anonymous');
//     const id = yield select(state => state.app.user);
//     yield put(setUsername({ id, username }));
//   }
// }

export default function* rootSaga() {
  // yield fork(handleRequestUsername);
  yield fork(handleRequestSignIn);
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
