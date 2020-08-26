var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "kukkui",
    password: "kukkui",
    database: "kukkui"
  });

  con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  }); 

//LEFT JOIN
//   SELECT users.name AS user,
// products.name AS favorite
// FROM users
// LEFT JOIN products ON users.favorite_product = products.id


//RIGHT JOIN
// SELECT users.name AS user,
// products.name AS favorite
// FROM users
// RIGHT JOIN products ON users.favorite_product = products.id