import express from 'express'

const app = express()

// // /api경로에서 어떤 http method로 보내든 항상 이것이 수행
// // 단 /api/doc에 접속을 하게되면 처리되지 않음
// app.all('/api', (req, res, next) => {
//   console.log('all');
//   next()
// })

// // /use/doc같은 /use가 붙은 다른 곳에서도 처리가됨
// app.use('/use', (req, res, next) => {
//   console.log('use');
//   next()
// })

// app.get('/apple/:id', (req, res, next) => {
//   // http://localhost:8080/apple/cock
//   // 를 입력하면 id값이 cock으로 param의 형태로 전달된다.
//   console.log(req.params)
//   console.log(1)
//   // http://localhost:8080/apple/cock/?keyword=bts
//   // 를 입력하면 query값이 전달된다.
//   console.log(req.query)
//   res.send('hi!')
// })
// // get method를 같은 경로에서 여러번 호출할 수 있다.
// app.get(
//   '/',
//   // next를 넣어주지 않는다면 첫번째 단계에서
//   // res.send를 해주지 않았다면
//   // 더이상 진행이 되지 않고 끝이 난다.
//   (req, res, next) => {
//     console.log('first')
//     // next()
//     next(new Error('error'))
//     // 를 하게 되면 처리하다가 에러가 나면 에러를 던져줌
//     // next('route')를 사용하면 다음 라우트로 넘어간다.
//   },
//   (req, res, next) => {
//     console.log('second')
//     res.send('end')
//   }
// )

// app.get('/', (req, res, next) => {})

// // 에러를 처리하는 것을 달아주어야함
// app.use((err, req, res, next) => {
//   console.log(error)
//   res.status(500).send('Sorry, try later!')
// })

// // cannot GET이 되었을 경우
// app.use((err, req, res, next) => {
//   res.status(404).send('Not available')
// })

app.use(express.json())
app.post('/', (req, res, next) => {
  console.log(req.body)
})

// 특정 서버에서 듣는다.
app.listen(8080)
