CREATE DATABASE jwttutorial;

--CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users(
    user_id uuid  DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
    
);
--
--reading all users
SELECT  * FROM users;


--insert fake users

INSERT INTO users(user_name, user_email, user_password) VALUES('joseph','josephmwamuye5@gmail.com' ,'j0hs@fe');