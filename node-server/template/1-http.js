const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('incoming...')
  console.log(req.headers)
  console.log(req.httpVersion)
  console.log(req.method)
  //   요청의 url을 얻어옵니다.
  console.log(req.url)
  //   Header의 content-type은 html이라는 것을 명시
  res.setHeader('Content-Type', 'text/html')
  //   사용자가 요청한 url이 '/'이라면
  if (req.url === '/') {
    fs.createReadStream('./html/index.html').pipe(res)
  } else if (req.url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res)
    // read를 응답에 보내줍니다.
  } else {
    fs.createReadStream('./html/not-found.html').pipe(res)
  }
  //   응답을 끝내줌
  //   res.end()
})

// 어떤 서버에서 들을껀지 명시시
server.listen(8080)
