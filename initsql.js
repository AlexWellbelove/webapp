var mysql = require('mysql');
var sqlfunc = mysql.createpool({
  host: "127.0.0.1"
  user: "root"
  password: ""
});
sqlfunc.getConnection(function(err,connection)){
  connection.query("create database if not exists images;
    create table if not exists images.image(
      id int primary key auto_increment,
      title varchar(100),
      filename varchar(100))
      charset 'utf8mb4';")
}
