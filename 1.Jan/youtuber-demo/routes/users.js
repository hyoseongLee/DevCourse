const express = require("express");
const router = express.Router();
const conn = require("../mariadb");
const { body, param, validationResult } = require("express-validator");
const jwt = require ('jsonwebtoken');
const dotenv = require ('dotenv');
dotenv.config();
 
router.use(express.json());

const validate = (req, res,next) => {
  const err = validationResult(req);
  if (err.isEmpty()) {return next()}
 else {
  return res.status(400).json(err.array());
}}


//로그인
router
.post(
  "/login",
  [
    body('email').notEmpty().isEmail().withMessage('이메일을 입력하시라구요'),
    body('password').notEmpty().isString().withMessage('비밀번호를 입력하세요'),
    validate
  ],
  (req, res) => {
  const { email, password } = req.body;
  let sql = `SELECT * FROM users Where email = ?`

  conn.query(sql,email,
    function (err, results) {
      if (err) {
        return res.status(400).end();
      }
    var loginUser = results[0]

      if (loginUser && loginUser.password == password){
        // 토큰 발급
      const token = jwt.sign({
        email : loginUser.email,
        name : loginUser.name,
      },process.env.PrivateKey,
    {
      expiresIn : '30m',
      insuer : "hyoseong"
    });
      //쿠키발급
      res.cookie("token",token,{
        httpOnly : ture
      })
      
      res.status(200).json({
            message: `${loginUser.name}님, 로그인되었습니다.`,
          })
          }else {
        res.status(403).json({
          message: "이메일 또는 비밀번호가 틀렸습니다."
        })}
}
)
})

//회원가입
router.post("/join",
  [
    body('email').notEmpty().isEmail().withMessage('이메일을 입력하시라구요'),
    body('password').notEmpty().isString().withMessage('비밀번호를 입력하세요'),
    body('name').notEmpty().isEmail().withMessage('이메일을 입력하시라구요'),
    body('contact').notEmpty().isString().withMessage('비밀번호를 입력하세요'),
    validate  ]
  , (req, res) => {
  if (req.body == {}) {
    res.status(400).json({
      message: "입력값을 확인 좀 해주세요..",
    });
  } else {
    const { email, name, password, contact } = req.body
    let sql = `INSERT INTO users (email,name,password,contact) VALUES (?, ? ,? , ?)`
    let VALUES = [email, name, password, contact]
    conn.query(sql,VALUES,
      function (err, results) {
        if (err) {
          return res.status(400).end();
        }
        res.status(201).json(results)
      }
    )
  }
})

//회원 개별 조회
router
.route("/users")
.get(
  [
    body('email').notEmpty().isEmail().withMessage('이메일을 입력하시라구요'),
    validate 
  ],
  function (req, res) {
  let { email } = req.body

  let sql = `SELECT * FROM users Where email = "${email}"`
  conn.query(sql,email,
    function (err, results) {
      if (results.length) {
        if (err) {
          return res.status(400).end();
        }
        res.status(200).json(results)
      }
    }
  )
})

  .delete(
    [
      body('email').notEmpty().isEmail().withMessage('이메일을 입력하시라구요'),
      validate
    ],
    (req, res) => {
    let { email } = req.body
    let sql = `DELETE FROM users WHERE email = ?`
    conn.query(sql,email,
      function (err, results) {
        if (err) {
          return res.status(400).end();
        }
        if (results.affectedRows == 0) {
          return res.status(400).end();
        } else {
          res.status(200).json(results);
        }
      }
    )
  })

module.exports = router;