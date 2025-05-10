const express = require ('express')
const app = express()
const userRouter = require('./routes/users')
const channelRouter = require('./routes/channels')
app.listen(1234)

app.use("/users",userRouter)
app.use("/channels",channelRouter)