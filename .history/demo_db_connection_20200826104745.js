var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "kukkui",
  password: "kukkui",
  database:"kukkui"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});