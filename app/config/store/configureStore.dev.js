import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootSaga from '../../sagas'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../../reducers'

const sagaMiddleware = createSagaMiddleware()

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(sagaMiddleware, createLogger())
    )
  )
	sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
