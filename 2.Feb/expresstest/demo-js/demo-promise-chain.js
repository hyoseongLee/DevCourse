//비동기 처리 "Promise(Chaining)"

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("완료", 3000));
}) 
  .then(
    function (result) {
      console.log(result);
      return result + "!!!!!";
    },
    function (error) {}
  )
  .then(
    function (result) {
      console.log(result);
      return result + "!!!!!"
    },
    function (error) {}
  )
  .then(
    function (result) {
      console.log(result);
      return result + "이것도 완료"
    },
    function (error) {}
  );
