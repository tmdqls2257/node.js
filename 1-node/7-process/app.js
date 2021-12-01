const process = require('process')

console.log(process.execPath)
console.log(process.version)
console.log(process.pid)
console.log(process.ppid)
console.log(process.platform)
console.log(process.env)
console.log(process.uptime())
console.log(process.cwd())
console.log(process.cpuUsage())
// 현재 동작하고 있는 node process의 정보를 가져옵니다.

setTimeout(() => {
  console.log('setTimeout')
}, 0)

// 현재 수행되고 있는 코드가 완료된 다음
// 콜백함수를 task 큐에다가 넣어달라고 할 때 사용
process.nextTick(() => {
  console.log('nextTick')
})

for (let i = 0; i < 10; i++) {
  console.log('for loop')
}
