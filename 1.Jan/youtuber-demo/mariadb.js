const mariadb = require('mysql2');
const connection = mariadb.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    port : 3306,
    timezone: "+09:00",
    database : 'Youtube'
}
);

connection.query(
    'SELECT * FROM users',
    function(err, results, fields) {
        if(err) {
            console.error(err)
            return
        }
        if(results.length > 0) {
        var {id,email,name,create_at} = results[0];

        }else {
            console.log("not found")
        }
    }
)

module.exports = connection;