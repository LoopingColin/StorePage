CREATE TABLE Checkout
    (
        checkout_id MEDIUMINT AUTO_INCREMENT,
        fName VARCHAR(200) NOT NULL,
        lName VARCHAR(200) ,
        Country VARCHAR(50),
        StreetAddress VARCHAR(200),
        TownorCity VARCHAR(200),
        StateorCounty VARCHAR(200),
        PostCodeorZip VARCHAR(200),
        Phone VARCHAR(50),
        EmailAddress VARCHAR(200),
        CONSTRAINT pk_Checkout PRIMARY KEY (checkout_id)

);



CREATE TABLE PC
        (
         pc_id TINYINT AUTO_INCREMENT,
           image VARCHAR(100) NOT NULL,
           title VARCHAR(30) NOT NULL,
           description VARCHAR(200) NOT NULL,
            price SMALLINT,
            CONSTRAINT pk_PCS PRIMARY KEY (pc_id)
    
     );

