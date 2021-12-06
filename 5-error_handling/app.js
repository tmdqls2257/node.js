import { error } from 'console'
import express from 'express'
import fs from 'fs'
import fsAsync from 'fs/promises'

const app = express()

app.use(express.json())

app.get('/file1', (req, res) => {
  // readFileSync는 콜백함수를 주지 않기 때문에 동기
  // 동기적인 경우 try catch로 err를 잡아줍니다.
  try {
    const data = fs.readFileSync('/file.txt')
  } catch (err) {
    res.status(404).send('File not found')
  }
  // 콜백을 던져주기 때문에 비동기입니다.
  fs.readFile('/file1.txt', (err, data) => {
    // 비동기의 경우 err각 콜백함수로 던져진 것이기 때문에 외부에서는 에러가 발생했는지 알 수 없다
    if (err) {
      res.status(404).send('File not found')
    }
  })
})

app.get('/file2', (req, res) => {
  fsAsync.readFile('/file.txt').catch(err => next(err))
  // err => next(err)를 next로 생략 가능
})

app.get('/file3', async (req, res) => {
  // 아래식 자체는 동기적이나 app.use에는 포착되지 않는다.
  // 그 이유는 await는 동기적으로 순차적으로 진행되지만
  // async로 감싸져 있고 async 자체는 promise를 리턴해줍니다.
  // 그렇기 때문에 try catch를 사용해야합니다.
  try {
    const data = await fsAsync.readFile('/file.txt')
  } catch (err) {
    res.status(404).send('File not found')
  }
})

async function number() {
  return 2
}

app.use((err, req, res, next) => {
  console.error(error)
  res.status(500).json({ message: 'Something went wrong' })
})

app.listen(8080)
