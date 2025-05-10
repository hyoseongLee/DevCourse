const crypto = require('crypto')
const password = "1111";


const salt = crypto.randomBytes(10).toString('base64');
const hashpassword = crypto.pbkdf2Sync(password,salt,10000,10,'sha512').toString('base64')

console.log(hashpassword);

// 회원가입 시 비밀번호를 암호화해서 암호화된 비밀번호와, salt값을 같이 저장
// 로그인 시 이메일&비밀번호(날 것) => salt값 꺼내서 비밀번호 암호화 해보고 => 디비 비밀번호 비교

