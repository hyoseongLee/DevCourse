const express = require("express"); 
const router = express.Router();
const conn = require("../mariadb");
const { body, param, validationResult } = require("express-validator");

router.use(express.json());


const validate = (req, res,next) => {
  const err = validationResult(req);
  if (err.isEmpty()) {return next()}
 else {
  return res.status(400).json(err.array());
}}

router
  .route("/")
  .get(
      [body("userId").notEmpty().isInt().withMessage("숫자입력하라고"),
        validate
      ]
    ,(req, res, next) => {
      validate(req, res)
      var { userId } = req.body

      let sql = `SELECT * FROM channels Where user_Id = ?`;

      conn.query(sql, userId, function (err, results) {
        if (err) {
          return res.status(400).end();
        }
        if (results.length) res.status(200).json(results);
        else return res.status(400).end()
      });
    }
  )

  .post(
    [
      body("userId").notEmpty().isInt().withMessage("숫자입력하라고"),
      body("channelname").notEmpty().isString().withMessage("문자여야한다고.."),
      validate
    ],
    (req, res) => {const { name, userId } = req.body;

      let sql = `INSERT INTO channels (name,userId) VALUES (?, ?)`;
      let VALUES = [name, userId];
      conn.query(sql, VALUES, function (err, results) {
        if (err) {
          return res.status(400).end();
        }
        res.status(201).json(results);
      });
    }
  );

router
  .route("/:id")
  .get([param("id").notEmpty().withMessage("채널 아이디 필요"),
    validate
  ], (req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    let sql =  "UPDATE notes SET users_id = ?, date = ?, title = ?, description = ?, tag = ? WHERE id = ?";
    conn.query(sql, id, function (err, results) {
      if (results.length) {
        if (err) {
          return res.status(400).end();
        }
        res.status(200).json(results);
      } else {
        return res.status(400).end()
      }
    });
  })

  .put(
    [
      param("id").notEmpty().withMessage("채널id필요함"),
      body("name").notEmpty().isString().withMessage("채널명 오류입니다."),
      validate
    ],
    (req, res) => {
      let { id } = req.params;
      id = parseInt(id);
      let { name } = req.body;

      let sql = `UPDATE channels SET name=?
      where id = ?`;
      let values = [name, id];
      conn.query(sql, values, function (err, results) {
        if (results.length) {
          if (err) {
            return res.status(400).end();
          }
          if (results.affectedRows == 0) {
            return res.status(400).end();
          } else {
            res.status(200).json(results);
          }
        }
      });
    }
  )

  .delete([param("id").notEmpty().withMessage("채널id필요함"),
    validate
  ], (req, res) => { 
    let { id } = req.params;
    id = parseInt(id);

    let sql = `DELETE FROM channels Where id = ?`;
    conn.query(sql, id, function (err, results) {
      if (err) {
        return res.status(400).end();
      }
      if (results.affectedRows == 0) {
        return res.status(400).end();
      } else {
        res.status(200).json(results);
      }
    });
  });

module.exports = router;
