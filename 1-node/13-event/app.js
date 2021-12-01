const EventEmitter = require('events')
const emitter = new EventEmitter()

const callback1 = args => {
  console.log('first callback - ', args)
}

emitter.on('ellie', callback1)

emitter.on('ellie', args => {
  console.log('second callback - ', args)
})

emitter.emit('ellie', { message: 1 })
emitter.emit('ellie', { message: 2 })
// ellie라는 이벤트에 등록된 callback1을 제거
emitter.removeListener('ellie', callback1)
// 제거하고난 callback1은 수행하지 않음
emitter.emit('ellie', { message: 3 })
