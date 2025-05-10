//Express 기본구조

const express = require('express')
const app = express()
const port = 1234

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json);

app.post('/test',(req,res)=> {
// body에 숨겨져서 들어온 데이터 보기
  res.send (req.body.message)
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})