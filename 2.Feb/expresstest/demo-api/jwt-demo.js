var jwt = require('jsonwebtoken'); // jwt 모듈 소환
var dotenv = require('dotenv')
dotenv.config();

var token = jwt.sign({foo:'bar'},process.env.PRIVATE_KEY);
//토큰을 생성하였음. (페이로드, 나만의 암호키) + SHA256

// 검증
// 만약 검증에 성공하면, 페이로드 값을 확인할 수 있음!
var decoded = jwt.verify(token,process.env.PRIVATE_KEY);
console.log(decoded)

