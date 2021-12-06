import express from 'express'
import userRouter from './routes/user.js'
import postRouter from './routes/post.js'

const app = express()

// REST API에서 Body를 읽어옵니다.
app.use(express.json())
// 동일하게 Body를 parsing한다
// HTML Form라는 UI 요소에서 submit을 하게 되면 request가 발생하는데
// 그때 HTML에서 만든 데이터를 body 안으로 parsing
// ssr에 유리
app.use(express.urlencoded({ extended: false }))

// public 폴더내에있는 리소스를 가져온다
// 옵션을 줄 수 도 있다.
app.use(express.static('public', options))

// /users라는 경로가 있고 그 경로에 관한것은 userRouter에 의해서 해결된다.
app.use('/users', userRouter)
// /posts라는 경로가 있고 그 경로에 관한것은 userRouter에 의해서 해결된다.
app.use('/posts', postRouter)

app.listen(8080)
