// Fixed-size chuck of memory
// 숫자의 배열 형태이다

const buf = Buffer.from('Hi')
console.log(buf)
console.log(buf.length)
// 아스키코드의 형태로 반환
console.log(buf[0])
console.log(buf[1])
console.log(buf.toString())

// create
// 사이즈가 2인 buffer를 만듭니다.
const buf2 = Buffer.alloc(2) //best
console.log(buf2)
// 사용되지 않는 메모리라면 공간을 확보하지만 초기화하지 않는 method가 있습니다.
const buf3 = Buffer.allocUnsafe(2) //fast
console.log(buf3)
buf2[0] = 72
buf2[1] = 105
buf2.copy(buf3)
console.log(buf2.toString())
console.log(buf3.toString())

// concat
const newBuf = Buffer.concat([buf, buf2, buf3])
