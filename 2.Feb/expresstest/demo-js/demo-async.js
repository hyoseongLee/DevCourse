// async-await : Promise 객체를 좀 더 쉽고 편하게 사용 문법
// 즉, 비동기 처리가 쉽다

// async 함수
// __ function f () {} : 일반 함수
// async function f () {} : async 함수
// async 첫번째 기능
async function f () {
    return 7;
}
// async 함수는 무조건 promise 객체 반환
// - 만약 반환값이 promise가 아니면, promise.resolve()

f().then (
    function (result) {
        console.log("promise resolve :", result)
    },
    function (error) {
        console.log("Promise reject :", error)
    }
)