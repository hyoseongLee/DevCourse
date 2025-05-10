const express = require("express");
const app = express();
var jwt = require("jsonwebtoken");
var dotenv = require("dotenv");

dotenv.config();

//서버 셋팅 : 포트 넘버(번호) 1234로 셋팅
app.listen(process.env.PORT);

// GET + "/jwt" : 토큰 발행
app.get("/jwt", function (req, res) {
  var token = jwt.sign({ foo: "bar" }, process.env.PRIVATE_KEY);

  res.cookie("jwt", token, {
    httpOnly: true,
  });
  res.send("토큰 발행 완료!");
});

app.get("/jwt/decoded", function (req, res) {
  var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
  res.send(decoded);
});