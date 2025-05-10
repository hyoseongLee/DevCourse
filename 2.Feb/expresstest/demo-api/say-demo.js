const express = require('express')
const app = express()

//GET / HELLO

app.get('/hello',function (req,res){
  res.json({
    say:"안녕하세요"
  })
})