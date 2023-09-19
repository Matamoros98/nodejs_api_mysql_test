CREATE DATABASE CompanyDb;
USE CompanyDb;

CREATE TABLE employee(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(45) DEFAULT NULL,
    BIRTHDATE DATE NOT NULL,
    SALARY INT DEFAULT NULL
)

INSERT INTO `employee` (`id`, `name`, `birthdate`, `salary`) VALUES
(1, 'Jhon Doe', '1990-06-15', 1222),
(2, 'Jose', '1992-10-25', 1300),
(3, 'Joe', '1991-02-11', 1222);