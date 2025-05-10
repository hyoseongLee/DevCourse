// promise "객체" : 약속을 지키는 친구

let promise = new Promise(function (resolve, reject) {
  //excutor : 이 친구가 할일
  setTimeout(() => resolve("완료", 3000));
}); 
// resolve(결과값) : 할일을 성공적으로 함 , reject(에러값) : 실패함.
// 친구소환
// 매개변수로 함수를 받음
//Promise의 기본 메소드 : promise가 일을 다하고 호출해야하는 함수
promise.then(
    function(result){
        console.log(result)
    },
    function(error){}
)
