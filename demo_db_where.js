var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "kukkui",
    password: "kukkui",
    database: "kukkui"
  });
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });