// Express 모듈셋팅
const express = require("express");
const app = express();
app.listen(1234);

// 데이터 셋팅

let youtuber1 = {
  channelTitle: "타임피버",
  sub: "593만명",
  videoNum: "939개",
};

let youtuber2 = {
  channelTitle: "괴물쥐",
  sub: "593만명",
  videoNum: "1234개",
};

let db = new Map(); //key - value = json
let id = 1;
db.set(id++, youtuber1);
db.set(id++, youtuber2);

//REST API 설계
app.get("/youtubers/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);

  const youtubers = db.get(id);
  if (youtubers == undefined) {
    res.status(404).json({
      message: "정보를 찾을 수 없습니다.",
    });
  } else {
    res.json(youtubers);
  }
});
var youtubers = {};
app.get("/youtubers", function (req, res) {
if(db.size !== 0 ) {
    db.forEach(function (value, key) {
    youtubers[key] = value;
  });
  res.json(youtubers);
} else {
  res.status(404).json ({
    message : '조회할 유튜버가 없습니다.'
  })
}

});

app.use(express.json()); //http 외 모듈인 '미들웨어':json 설정
app.post("/youtubers", (req, res) => {
if(req.body.channelTitle) {
  //등록 Map(db)에 저장(set) 해야함.
  db.set(id++, req.body);
  res.status(201).json({
    message: `${db.get(id - 1).channelTitle}님, 유튜버 생활을 응원합니다!`,
  });
} else {
  res.status(400).json ({
    message: '요청 값을 제대로 보내주세요;;'
  })
}


});

app.delete("/youtubers/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  var youtuber = db.get(id)

  if (id == undefined) {
    res.status(404).json({
      message: `오류발생,요청하신 유튜버가 없습니다.`
    });
  } else {
    const channelTitle = db.get(id).channelTitle;
    db.delete(id);
    res.json({
      message: `${channelTitle}님, 그동안 감사했습니다.`
    });
  }
});

app.delete('/youtubers', (req,res) => {
   if( db.size >= 1) {
     db.clear()

  res.status(404).json({
    msg : '전체 삭제되었습니다.'
  })
  }else{
    res.json({
      msg : '삭제할 유튜버가 없습니다.'
    })
  }
 
})


app.put('/youtubers/:id', (req,res) => {
  let {id} = req.params
  id = parseInt(id)

  var youtuber = db.get(id)
  var oldTitle = youtuber.channelTitle
  if(youtuber == undefined) {
    res.status(404).json({
    message : `${id} 는 없는 내용입니다.`
  })
  }else {
    var newTitle = req.body.channelTitle
    youtuber.channelTitle = newTitle
    db.set(id,youtuber)
res.json ({
  message : `${oldTitle}님, 채널명이 ${newTitle}로 수정되었습니다.`
})
  }
})