import { fork, call, put, take, select } from 'redux-saga/effects';
import firebase from '../api'
import actionNames from '../actions'
import {
  requestSignIn, receiveSignIn
} from '../actions';

// Requests anonymous sign in with the database and returns a promise that will resolve when the request returns
function signIn() {
  return firebase.auth().signInAnonymously()
    .then(user => ({ user }))
    .catch(error => ({ error }));
}

// Takes a request sign in action and tries to signIn to the database.
function* handleRequestSignIn() {
  while (true) {
	try {
		yield take(actionNames.REQUEST_SIGN_IN);
		const { user, error } = yield call(signIn);
		if (user && !error) {
		  yield put(receiveSignIn(user));
		} else {
		  yield put(receiveSignIn(error));
		}
	} catch(error) {
		alert(error)
	}
  }
}

export default function* rootSaga() {
  yield fork(handleRequestSignIn);
}
