console.log('logging.....')
console.clear()

// log level
// 터미널에서 출력해보면 구분하기가 어려움
// 브라우저에서 출력하면 다름
// 이렇게 다르게 하는 이유는 심각성 때문이다. 단순히 로그가 아니라 error라면 
// 그 심각성을 나타내기 위해서 나눠주는 겁니다.
console.log('log') // 개발할 떄
console.info('info') // 정보를 남기고 싶을 때
console.warn('warn') // 치명적인 에러가 아닐 때
console.error('error') // 치명적인 에러일 때

// assert
// 첫번째 파라미터가 false일 때만 출력
console.assert(2 === 3, 'not same!')
console.assert(2 === 2, 'same!')

// print object
const student = { name: 'ellie', age: 20, company:{name: 'AC'} }
console.log(student)
console.log('------------------')
console.table(student)
console.log('------------------')
// 옵션을 넣을 수 있음
console.dir(student, {showHidden:true, colors: false, depth: 0})

// measuring time
console.time('for loop')
for(let i = 0; i < 10; i++){
  i++
}
// 같은 레이블이 시작하고 끝날 때까지 시간을 보여줌
console.timeEnd('for loop')

// counting
// 해당하는 레이블이 몇 번 호출 되었는지 확인
function a(){
  console.count('a function')
}
a()
// 같은 레이블의 카운트를 초기화
console.countReset('a function')
a()

// trace
// 디버깅할 때 유용
function f1(){
  f2()
}
function f2(){
  f3()
}
function f3(){
  console.log('f3')
  console.trace
}
f1()