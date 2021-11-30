// node모듈이구나라고 이해를 시켜줌
const fs = require('fs')

console.log(global)

global.hello = () => {
  global.console.log('hello')
}

global.hello()
hello()
