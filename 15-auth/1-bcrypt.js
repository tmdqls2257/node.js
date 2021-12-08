const bcrypt = require('bcrypt');

const password = 'abcd1234';
// hashSync 해쉬해주는 함수
// 너무 많은 숫자를 해쉬해주면 기하급수적으로 시간이 늘어나기 때문에 10 정도가 적당하다
const hashed = bcrypt.hashSync(password, 10);
console.log(`password: ${password}, hashed: ${hashed}`);

// 사용자가 로그인할 때 검사할 때는
const result = bcrypt.compareSync('abcd123', hashed);
console.log(result);
