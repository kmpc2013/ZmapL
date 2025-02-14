CREATE DATABASE IF NOT EXISTS zmapl_prod;

USE zmapl_prod;

CREATE TABLE
    veeam (
        id INT PRIMARY KEY AUTO_INCREMENT,
        VeeamRepoFilesystem VARCHAR(200),
        VeeamTenant VARCHAR(200),
        VeeamAcronym VARCHAR(200),
        LigeroCustomerId VARCHAR(45) NOT NULL,
        LigeroEmail VARCHAR(45) NOT NULL,
        LigeroService VARCHAR(45) NOT NULL,
        ChangedAt VARCHAR(45) NOT NULL
    );

CREATE TABLE
    fortigate (
        id INT PRIMARY KEY AUTO_INCREMENT,
        VDOM VARCHAR(200),
        LigeroCustomerId VARCHAR(45) NOT NULL,
        LigeroEmail VARCHAR(45) NOT NULL,
        LigeroService VARCHAR(45) NOT NULL,
        ChangedAt VARCHAR(45) NOT NULL
    );

CREATE TABLE
    vmware (
        id INT PRIMARY KEY AUTO_INCREMENT,
        ClientVmwareFolder VARCHAR(200),
        LigeroCustomerId VARCHAR(45) NOT NULL,
        LigeroEmail VARCHAR(45) NOT NULL,
        LigeroService VARCHAR(45) NOT NULL,
        ChangedAt VARCHAR(45) NOT NULL
    );