// 파일의 경로에 접근하거나 경로에 대해서 무언가 처리해야할 때
const { parse } = require('path')
const path = require('path')

console.log(__dirname)
console.log(__filename)

// 경로 구분자
console.log('---------------------------------------')
console.log(path.sep)
// 환경 변수 구분자
console.log('---------------------------------------')
console.log(path.delimiter)

// basename
console.log('---------------------------------------')
console.log(path.basename(__filename))

// 확장자를 제거함
console.log('---------------------------------------')
console.log(path.basename(__filename, '.js'))

// dirname
console.log('---------------------------------------')
console.log(path.dirname(__filename))

// extension
console.log('---------------------------------------')
console.log(path.extname(__filename))

// parse
console.log('---------------------------------------')
const parsed = path.parse(__filename)
console.log(parsed)

const str = path.format(parsed)
console.log(str)

// isAbsolute
// 절대 경로라면 true를 상대 경로라면 false
console.log('isAbsolute?', path.isAbsolute(__dirname))
console.log('isAbsolute?', path.isAbsolute('../'))

// normalize
// 잘못된 경로를 수정해줌
console.log(path.normalize('./folder///sub'))

// join
console.log(__dirname + path.sep + 'image')
console.log(path.join(__dirname, 'image'))
