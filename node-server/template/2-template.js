const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

const name = 'Redbeen'
const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'node' },
]

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  if (req.url === '/') {
    // end를 하면서 data를 보내줄 수 있음
    ejs
      .renderFile('./html/index.ejs', { name: name })
      .then(data => res.end(data))
  } else if (req.url === '/courses') {
    ejs
      .renderFile('./html/courses.ejs', { courses: courses })
      .then(data => res.end(data))
  } else {
    ejs
      .renderFile('./html/not-found.ejs', { name: name })
      .then(data => res.end(data))
  }
})

server.listen(8080)
