const http = require('http')
const fs = require('fs')
const { log } = require('console')

const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'node' },
]

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/courses') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(courses))
    } else if (method === 'POST') {
      const body = []
      req.on('data', chunk => {
        console.log(1)
        console.log(chunk)
        body.push(chunk)
      })
      req.on('end', () => {
        console.log(2)
        const toString = Buffer.concat(body).toString()
        console.log(toString)
        console.log(3)
        console.log(Buffer.concat(body))
        const course = JSON.parse(toString)
        courses.push(course)
        console.log(4)
        console.log(course)
        res.writeHead(201)
        res.end()
      })
    }
  }
})

// 어떤 서버에서 들을껀지 명시시
server.listen(8080)
