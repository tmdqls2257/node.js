// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다.
// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.
// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 비디오, 이미지,

const fs = require('fs')
console.log(process.argv)
// node app.js test 입력하면 test가 나옴
