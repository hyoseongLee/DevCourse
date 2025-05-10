/**
 * 배열
 */

const arr = [1, 2, 3, 4, 5];

// 콜백함수가 하는일
// 객체 (또는 배열)에서 요소를 하나 꺼낸 다음
// 매개변수로 그 요소를 전달하여 호출되는 콜백함수

arr.forEach(function (a, b, c) {
  //첫번째는 요소 데이터값, 두번째는 인덱스값, 마지막은 객체 전부
  console.log(`a:${a}`, `b:${b}`, `c:${c}`);
});
let map = new Map()
map.set(8,"eight")
map.set(1,"one")
map.set(3,"three")