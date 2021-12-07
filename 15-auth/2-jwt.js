const jwt = require('jsonwebtoken')
// npm i jsonwebtoken

const secret = 'fSTWh2471^%Vw9dmUyYR$BXL*VJhq&N&'
const token = jwt.sign(
  {
    // payload
    id: 'ellie',
    isAdmin: false,
  },
  secret,
  // 2초후에 만료가 됨
  { expiresIn: 2 }
)

// 3초후에 작동하기 때문에 expire되었다고 오류가 남
setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded)
  })
}, 3000)

console.log(token)
