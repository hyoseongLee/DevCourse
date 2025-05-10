const express = require("express");
const app = express();

const { faker } = require("@faker-js/faker");

//localhost:1234/kake/users
// 한명의 사용자 정보 생성
// email,password,fullName,contact

// req로 숫자를 받아서, 그 수 만큼 사용자 정보를 생성해주는 api

app.get("/fake/users/", function (req, res) {
  const {num} = req.query;

  let index = 1;
  let users = [];
  while (index <= num) {
    users.push({
      email: faker.internet.email(),
      password: faker.internet.password(),
      username: faker.internet.username(),
      fullName: faker.person.fullName(),
      phone: faker.phone.number(),
    });
    index++;
  }
  res.status(200).json(users);
});

// app.get('/fake/users', function(req,res){
//     res.status(200).json({
//         email : faker.internet.email(),
//         password : faker.internet.password(),
//         username : faker.internet.username(),
//         fullName : faker.person.fullName(),
//         phone : faker.phone.number()
//     })
// })

app.listen(5555);
