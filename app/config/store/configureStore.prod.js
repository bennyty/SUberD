import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../../reducers'
import rootSaga from '../../sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

// Same a dev environment without debugging modules
const configureStore = preloadedState => {
	const store = createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(sagaMiddleware)
	)

	sagaMiddleware.run(rootSaga)
	return store
}

export default configureStore
