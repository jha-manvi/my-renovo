create database my_db;

create table my_table(
    user_id serial primary key,
    user_name varchar(255) NOT NULL,
    user_email varchar(255) NOT NULL,
    user_password varchar(255) NOT NULL,
    confirm_password varchar(255) NOT NULL
);
