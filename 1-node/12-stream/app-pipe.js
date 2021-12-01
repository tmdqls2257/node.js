const fs = require('fs')

const readStream = fs.createReadStream('./file.txt')
const zlibStream = zlib.createGzip()
const writeStream = fs.createWriteStream('./file4.txt')
// pipe는 연결해주는 역할
const piping = readStream.pipe(zlibStream).pipe(writeStream)
piping.on('finish', () => {
  console.log('done!!')
})

const http = require('http')
