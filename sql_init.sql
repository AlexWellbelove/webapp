create database if not exists images;
  create table if not exists images.image(
    id int primary key auto_increment,
    title varchar(100),
    filename varchar(100))
    charset 'utf8mb4';
  
