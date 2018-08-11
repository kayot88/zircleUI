import store from '../store'
const debug = {
  setLog (msg, type) {
    switch (type) {
      case 'warn':
        var bgColor = 'yellow'
        var color = 'black'
        break
      case 'error':
        bgColor = 'red'
        color = 'white'
        break
      default:
        bgColor = 'green'
        color = 'white'
    }
    if (store.state.debug) {
      if (msg === 'Navigation mode is forward' && store.actions.getHistoryLength() === 1) {
        console.groupCollapsed('%c Z ', 'background: gray; color:  white', 'Initial view') // eslint-disable-line no-console
      } else if (msg === 'Navigation mode is forward' && store.actions.getHistoryLength() >= 1) {
        console.groupCollapsed('%c Z ', 'background: gray; color:  white', 'Zoom-in to new view') // eslint-disable-line no-console
      } else if (msg === 'Navigation mode is backward') {
        console.groupCollapsed('%c Z ', 'background: gray; color:  white', 'Zoom-out to previous view') // eslint-disable-line no-console
      }
      console.log('%c z ', 'background: ' + bgColor + '; color:  ' + color + '', msg) // eslint-disable-line no-console
      if (msg === 'Navigation mode is iddle') console.groupEnd() // eslint-disable-line no-console
    }
  },
  getState () {
    return store.state.$data
  }
}
export default debug
