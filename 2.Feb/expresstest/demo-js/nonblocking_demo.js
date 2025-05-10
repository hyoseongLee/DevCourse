const figlet = require('figlet');

// 텍스트를 아스키 아트로 변환
figlet('Hello World!', (err, data) => {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});