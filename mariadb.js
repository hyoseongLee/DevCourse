const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    timezone : 'Asia/Seoul',
    database : 'Youtube',
    dateStrings : true
});

connection.query(
    'SELECT * FROM `users`',
    function(err, results, fields) {
        var arr = [1,2,3]
        var {id,email,name,create_at} = results[0];
    }
)

module.exports = connection;