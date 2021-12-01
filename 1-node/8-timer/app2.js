// 우선순위가 다르기 떄문에 선언 순서대로 출력되지 않음
console.time('timeout 0')
console.log('code1')
setTimeout(() => {
  console.log('setTimeout 0')
}, 0)

console.log('code2')
setImmediate(() => {
  console.log('setImmediate')
})

console.log('code3')
process.nextTick(() => {
  console.log('process.nextTick')
})
console.timeEnd('timeout 0')
