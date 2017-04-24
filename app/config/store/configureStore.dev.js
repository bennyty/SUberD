import { createStore, applyMiddleware, compose } from 'redux'
import rootSaga from '../../sagas'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../../reducers'
import Reactotron from 'reactotron-react-native'

// Register debugging middleware
const sagaMonitor = Reactotron.createSagaMonitor()
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

// Create a function that will configure the initial state of the redux store
const configureStore = preloadedState => {
  const store = Reactotron.createStore(
    rootReducer,
   preloadedState,
	applyMiddleware(sagaMiddleware)
    // compose(
      // applyMiddleware(sagaMiddleware, createLogger())
    // )
	)
	sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
