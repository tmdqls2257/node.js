import express from 'express'
import userRouter from './routes/user.js'
import postRouter from './routes/post.js'

const app = express()

app.use(express.json())

// /users라는 경로가 있고 그 경로에 관한것은 userRouter에 의해서 해결된다.
app.use('/users', userRouter)
// /posts라는 경로가 있고 그 경로에 관한것은 userRouter에 의해서 해결된다.
app.use('/posts', postRouter)

app.listen(8080)
