const express = require("express");
const app = express();

app.listen(1234);


//유튜브 채널
// 빌어먹을 https://www.youtube.com/channel/UC6dFCtUSZJ383yn1ybQBdsg

let youtuber1= {
    channelTitle : "타임피버",
    sub : "593만명",
    videoNum : "939개"
}

let youtuber2= {
    channelTitle : "괴물쥐",
    sub : "593만명",
    videoNum : "1234개"
}


app.get("/:nickname/", function (req, res) {
  const {nickname} = req.params;
  if (nickname == "@타임피버"){
    res.json(youtuber1)
  }else if (nickname == "@괴물쥐유튜브"){
    res.json(youtuber2)
  }else {
    res.json({
        message : "알수없는 유튜버입니다."
    })  // 개발자가 예상하지 못한 에러가 발생했다.
  }


});



// 영상 시청 주소 https://www.youtube.com/watch?v=Y9SS_gUBIy8&list=RDY9SS_gUBIy8&start_radio=1

 
