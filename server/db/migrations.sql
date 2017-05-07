-- CREATE DATABASE catchores;

\c catchores;

CREATE TABLE chores (id SERIAL PRIMARY KEY, roommatename varchar(30), chorename varchar(30), dateday varchar(30));
