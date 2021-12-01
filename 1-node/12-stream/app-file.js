const fs = require('fs')

// 똥
const beforeMem = process.memoryUsage().rss
fs.readFile('./file.txt', (_, data) => {
  fs.writeFile('./file2.txt', data, () => {})
  // calculate
  // 메모리를 얼마나 사용하였는지 알수 있는 계산
  const afterMem = process.memoryUsage().rss
  const diff = afterMem - beforeMem
  const consumed = diff / 1024 / 1024
  console.log(diff)
  console.log(`Consumed Memory: ${consumed}MB`)
})
