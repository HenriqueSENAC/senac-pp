create database db_fwpp;
use db_fwpp;

create table cadastro(
id int primary key auto_increment, 
email varchar(255) not null, 
senha varchar(255) not null,
cel varchar(255) not null
);

drop table cadastro;

insert into cadastro(id, email, senha, cel)
values (1, "senac@senacrs.edu.br", "12345", "99 99999-9999");

select * from cadastro;

create table catalog(
id int primary key auto_increment,
item_name varchar(255) not null,
item_img BLOB not null,

