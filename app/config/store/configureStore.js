// Pick the correct configuration depending on if we are in production environment
if (__DEV__) {
  module.exports = require('./configureStore.dev')
} else {
  module.exports = require('./configureStore.prod')
}
