var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "kukkui",
    password: "kukkui",
    database: "kukkui"
  });
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });

  var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});