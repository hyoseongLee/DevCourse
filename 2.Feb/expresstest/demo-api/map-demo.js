const express = require("express");
const app = express();
app.listen(1234);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/:id", function (req, res) {
  let { id } = req.params;
  console.log(id);
  id = parseInt(id); //"숫자" => 숫자
  if (db.get(id) == undefined) {
    res.json({
      message: "없는 상품입니다.",
    });
  } else {
    product = db.get(id);
    product["id"] = id;
    // product.id = id => 아이디를 같이 보내고싶을때 
    res.json(product);
  }

  //localhost:1234/1= NoteBook

  res.json({
    id: id,
    ProductName: db.get(id),
  });
});

let NoteBook = {
  ProductName: "NoteBook",
  price: 100000,
};

let Cup = {
  ProductName: "Cup",
  price: 3000,
};

let chair = {
  ProductName: "chair",
  price: 50000,
};

let db = new Map();
db.set(1, NoteBook); // 키로 벨류를 찾을 수 있는 한 쌍을 저장
db.set(2, Cup);
db.set(3, chair);

console.log(db);
console.log(db.get(1));
