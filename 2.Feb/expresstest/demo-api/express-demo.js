const express = require('express')
const app = express()
 
//서버 셋팅 : 포트 넘버(번호) 1234로 셋팅
app.listen(1234)

//GET + "/"
app.get('/', function (req, res) {
  res.send('Hello World')
})


// API : GET + "http://localhost:3000/test"
// "test success"


app.get('/products/1',function(req,res){
    res.json({
        title : "Node.js를 공부해보자",
        price : 20000,
        description : "이 책 좋음" })
})

