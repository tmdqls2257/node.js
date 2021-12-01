const { count } = require('console')
const fs = require('fs')

// 스트림은 조금 조금씩 읽어오기 때문에 event base이다
const readStream = fs
  .createReadStream('./file.txt', {
    highWaterMark: 8, // 64 kbytes
    encoding: 'utf-8',
  })
  .on('data', chunk => {
    // console.log(chunk)
    data.push(chunk)
  })
  .on('end', () => {
    console.log(data.join(''))
  })
  .on('error', error => {
    console.log(error)
  })

// data가 오면
// const data = []
// readStream.on('data', chunk => {
// console.log(chunk)
//   data.push(chunk)
// })

// readStream.on('end', () => {
//   console.log(data.join(''))
// })

// readStream.on('error', error => {
//   console.log(error)
// })
