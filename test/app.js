const fs = require('fs')
const path = require('path')

fs.mkdir('captured', { recursive: true }, err => {
  if (err) throw err
})

fs.mkdir('video', { recursive: true }, err => {
  if (err) throw err
})

fs.mkdir('duplicated', { recursive: true }, err => {
  if (err) throw err
})

if (path.extname(__filename) === 'mp4' || path.extname(__filename) === 'mov') {
}
if (path.extname(__filename) === 'aae') {
}
if (path.extname(__filename) === 'mp4' || path.extname(__filename) === 'mov') {
}
