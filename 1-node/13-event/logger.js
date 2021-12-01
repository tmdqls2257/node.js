const EventEmiiter = require('events')

class Logger extends EventEmiiter {
  log(callback) {
    // 이벤트를 발생시킴
    this.emit('log', 'started...')
    callback()
    this.emit('log', 'end...')
  }
}

module.exports.Logger = Logger
