const express = require('express');
const app = express();
app.listen(1234);

app.get("/:",function(req,res){
    let p = req.params;
    res.json(p)
})