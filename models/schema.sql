DROP DATABASE IF EXISTS elevate_db;

-- name of the database
CREATE DATABASE elevate_db;

-- selects database elevate_db to be used
USE elevate_db;

-- Creates the table for the users name and password
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    -- users log in name
    user_name VARCHAR(50) NOT NULL,
    -- users log in password
    user_pass VARCHAR(50) NOT NULL,
    -- users date of birth
    user_dob VARCHAR(25) NOT NULL,
    -- users email
    user_email VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

-- creates a table for all of the beverages: beer wine and spirits
CREATE TABLE bevs(
     id INT NOT NULL AUTO_INCREMENT,
    -- category of the beverage ex. beer wine spirit
    bev_category VARCHAR(100) NOT NULL,
    -- the type of beverage it is in that category ex. ipa, merlot, vodka
    bev_type VARCHAR(100) NOT NULL,
    -- name of the product ex. corona, bud light, 19 crimes red blend, tito's vodka,
    bev_name VARCHAR(100) NOT NULL,
    -- alcohol by volume ex. 12% abv, 4.5% abv
    bev_abv VARCHAR(20),
    -- International bitterness units comes as a plane number ex. 45, 20, 80
    bev_ibu VARCHAR(20),
    -- country of origin ex. Rhone France, Seattle WA USA, Moscow Russia
    bev_country VARCHAR(100),
    -- maker of product ex. Samuel Adams Brewing, Heritage Distilling, Cheatue St. Michelle
    bev_maker VARCHAR(100),
    -- description of product 
    bev_descr VARCHAR(5000),
    -- is organic or not as a boolean
    bev_organic BOOLEAN,
    -- picture of the product
    bev_img VARCHAR(5000),
    PRIMARY KEY(id)
);

-- creates a table for strains of MJ
CREATE TABLE strains(
     id INT NOT NULL AUTO_INCREMENT,
    -- name of strain ex. blue dream, ATF, OG kush
    strain_name VARCHAR(50) NOT NULL,
    -- race of the strain ex. sativa, indica, hybrid
    strain_race VARCHAR(15) NOT NULL,
    -- flavor profile of the strain ex. berry, sweet, nutty
    strain_flavor VARCHAR(1500),
    -- positive effects ex. happy, uplifting, energetic
    strain_positive VARCHAR(1500),
    -- negative effects ex. dry mouth, dizzy, paranoid
    strain_negative VARCHAR(1500),
    -- medical use for strain
    strain_medical VARCHAR(1500),
    -- description of the strain
    strain_descr VARCHAR(5000),
    -- image for strain
    strain_img VARCHAR(5000),
    PRIMARY KEY(id)
);

-- creates a table for the wishlist/ strains user wants to try
CREATE TABLE wishlist_strains(
    id INT NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(10) NOT NULL,
    strains_id VARCHAR(10),
    PRIMARY KEY(id)
);

-- creates a table for the wishlist/ beverages user wants to try
CREATE TABLE wishlist_bevs(
    id INT NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(10) NOT NULL,
    bev_id VARCHAR(10),
    PRIMARY KEY(id)
);

-- creates table for friends
CREATE TABLE friends(
    id INT NOT NULL AUTO_INCREMENT,
    -- name of the user
    user_id INT(100) NOT NULL,
    -- name of the friend
    friend_id INT(100) NOT Null,
    PRIMARY KEY(id)
);

-- creates table for strains reviews
CREATE TABLE bev_reviews(
    id INT NOT NULL AUTO_INCREMENT,
    -- name of the user
    user_id INT(100) NOT NULL,
    -- name of the friend
    bev_id INT(100) NOT Null,
    -- text for the review
    bev_review VARCHAR(1000),
    -- 1-5 rating
    bev_rating TINYINT,
    PRIMARY KEY(id)
);

-- creates tbale for beverage reviews
CREATE TABLE strain_reviews(
    id INT NOT NULL AUTO_INCREMENT,
    -- name of the user
    user_id INT(100) NOT NULL,
    -- name of the friend
    strain_id INT(100) NOT Null,
    -- text for the review
    strain_review VARCHAR(1000),
    -- 1-5 rating
    strain_rating TINYINT,
    PRIMARY KEY(id)
);

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
