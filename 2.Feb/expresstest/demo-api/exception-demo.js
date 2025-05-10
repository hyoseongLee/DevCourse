const express = require("express");
const app = express();
app.listen(1234);

const fruits = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "strawberry" },
  { id: 4, name: "blueberry" }
];

//과일 전체 조회
app.get("/fruits", (req, res) => {
  res.json(fruits);
});

//과일 개별조회
app.get("/fruits/:id", (req, res) => {
  let id = req.params.id;
var resultFruit = fruits.find(f =>(f.id==id))
// 배열 안에 있는 객체 중 , id값이 params.id랑 같은 객체

if(resultFruit)
  res.json(resultFruit)
else // 예외를 터트린다. = http status code 성공 X 실패!
res.status(404).send('cannot..find')
});
