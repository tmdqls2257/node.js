import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    // 해당 ip에서만 cors를 허용하도록 합니다.
    origin: ['http://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
    credentials: true, // Access-Control-Allow-Origin: true와 같다
  })
)

app.use((req, res, next) => {
  // CORS 를 만족시키기 위한 옵션
  // 'Access-Control-Allow-Origin'을 외우기 어렵기 때문에
  // npm i cors로 해줘도 됩니다.
  // app.use(cors())를 호출
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, DELETE'
  )
  next()
})

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.listen(8080)
