CREATE DATABASE IF NOT EXISTS zmapl_prod;
USE zmapl_prod;
CREATE TABLE veeam (
    id INT PRIMARY KEY AUTO_INCREMENT,
    VeeamRepoFilesystem VARCHAR(25),
    VeeamAcronym VARCHAR(5),
    LigeroCustomerId VARCHAR(45) NOT NULL,
    LigeroEmail VARCHAR(45) NOT NULL,
    LigeroService VARCHAR(45) NOT NULL,
    changedAt VARCHAR(45) NOT NULL
)