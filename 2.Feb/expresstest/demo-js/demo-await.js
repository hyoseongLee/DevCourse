// async-await : Promise 객체를 좀 더 쉽고 편하게 사용 문법
// 즉, 비동기 처리가 쉽다

// await 함수
// await은 async 함수 안에서만 동작함.
// await이.. promise 객체.then()이 메소드를 좀 더 쉽게 사용할 수 있는 방법

// async도 한단계 더 특별
// async 두번째 기능
// promise 객체가 일이 끝날 때까지 기다릴 수 있는
// 공간을 제공한다!

//Promise 객체 한개당 => query 하나
async function f() {
  let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("First"), 3000);
  });
  // promise 객체가 일을 다 할때까지 기다려줌
  let result1 = await promise1;
  console.log(result1);

  let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Second with" + result1), 3000);
  });
  let result2 = await promise2;
  console.log(result2);

  let promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("third with" + result2), 3000);
  });
  let result3 = await promise3;
  console.log(result3);
}

f();
