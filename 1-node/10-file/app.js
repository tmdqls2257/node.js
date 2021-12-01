const fs = require('fs')

// 모든 api는 3가지 형태로 주워진다.
// rename(필요한 인자, callback(err, data)) 필요한 인자를 받아와서 콜백함수에 던져준다.
// 콜백함수는 err가 발생하거나 원하는 데이터를 받아왔는지 전달이 됨
// try {renameSync(필요한 인자)} catch(e) 끝날 때까지 다른걸로 넘어가지 않음(사용하지 않기)
// promises.rename().then().catch(0)

// ./file.txt를 ./file-new.txt로 변경
// 동기적인 방법
try {
  fs.renameSync('./file.txt', './file-new.txt')
} catch (error) {
  console.error(error)
}

// 비동기적인 방법
// 콜백함수를 넘겨줘야함
// hello가 출력되고 파일 이름을 변경하고 나서 에러가 나지 않기 때문에 null이 출력
fs.rename('./text-new.txt', './text.txt', err => {
  console.log(err)
})
console.log('hello')

fs.promises
  .rename('./text.txt', './text-new/txt')
  .then(() => console.log('Done!'))
  .catch(console.error)
