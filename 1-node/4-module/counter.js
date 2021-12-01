let count = 0

function increase() {
  count++
}

function getCount() {
  return count
}
// export하는 방법
module.exports.getCount = getCount
module.exports.increase = increase
console.log(module.exports === exports)
// exports.increase로 해도 되지만 다른 값을 넣어주면 달라지기 때문에 module.exports를 쓰는게 좋다.
exports = {}
console.log(module.exports === exports)
