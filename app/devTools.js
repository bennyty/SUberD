import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

// External application that allows viewing of a React-redux application
Reactotron
  .configure()
  .use(sagaPlugin())
  .use(reactotronRedux())
  .connect()
