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
