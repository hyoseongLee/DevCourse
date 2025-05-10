const express = require("express");
const app = express();

app.listen(1234);
// : => 어? 나한테 URL로 매개변수를 전달해줄건가보다
// req.params
// product/__ 빈칸에 오는 값을 n이라는 변수에 담아줘
// console.log(req.params)
// console.log(req.params.n)

app.get("/products/:n", function (req, res) {
  if (parseInt(req.params.n) - 10 > 5) {
    console.log("url로 전달받은 값이 10보다 크네요.");
  }

  let number = parseInt(req.params.n) - 10;
  console.log(number); //숫자 , "문자" = parseInt 문자를 숫자로 바꿔줌.

  res.json({
    num: req.params.n,
  });
});

app.get("/product/3", function (req, res) {
  let number = parseInt(req.params.n) - 10;
  res.json({
    num: number,
  });
});

//유튜브 채널
// 빌어먹을 https://www.youtube.com/channel/UC6dFCtUSZJ383yn1ybQBdsg

app.get("/:nickname", function (req, res) {
  const param = req.params;
  res.json({
    channel: param.nickname,
  });
});

// 영상 시청 주소 https://www.youtube.com/watch?v=Y9SS_gUBIy8&list=RDY9SS_gUBIy8&start_radio=1

app.get("/watch", function (req, res) {
  const q = req.query;
  console.log(q.v);
  console.log(q.t);

  const {v,t}= req.query
  
  res.json({
    video: q.v,
    timeline: q.t,
  });
});

