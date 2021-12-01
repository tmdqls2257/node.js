const fs = require('fs').promises

// read a file
fs.readFile('./text.txt', 'utf8')
  .then(data => console.log(data))
  .catch(console.error)

// writing a file
// file.txt에 Hello, Dream Coders! :)가 써진다.
fs.writeFile('./file.txt', 'Hello, Dream Coders! :)').catch(console.error)
// 글자를 더해줌
fs.appendFile('./file.txt', 'Yo!, Dream Coders! :)')
  .then(() => {
    // copy
    fs.copyFile('./file.txt', '.file2.txt').catch(console.error)
  })
  .catch(console.error)

// folder
// 폴더를 하나 생성함
fs.mkdir('sub-folder').catch(console.error)

fs.readdir('./') //
  .then(console.log) //
  .catch(console.error)
