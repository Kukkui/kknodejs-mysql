var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "kukkui",
    password: "kukkui"
  });
  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});