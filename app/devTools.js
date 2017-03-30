import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

Reactotron
  .configure() // we can use plugins here -- more on this later
  .use(sagaPlugin())
  .use(reactotronRedux())
  .connect() // let's connect!
