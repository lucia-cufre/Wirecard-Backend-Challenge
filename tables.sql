-- Active: 1663887826768@@35.226.146.116@3306@Hopper-4314048-lucia-aman

CREATE TABLE
    IF NOT EXISTS Client (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(64) UNIQUE
    );

CREATE TABLE
    IF NOT EXISTS Buyer (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(64) NOT NULL,
        email VARCHAR(64) NOT NULL,
        cpf VARCHAR(64) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS Payment (
        id VARCHAR(64) PRIMARY KEY,
        amount DECIMAL NOT NULL,
        type VARCHAR(64) NOT NULL,
        card NUMERIC,
        client_id VARCHAR(64) NOT NULL,
        buyer_id VARCHAR(64) NOT NULL,
        Foreign Key (client_id) REFERENCES Client(id),
        Foreign Key (buyer_id) REFERENCES Buyer(id)
    );

    ALTER TABLE `Payment` MODIFY COLUMN type VARCHAR(64) NOT NULL;

CREATE TABLE
    IF NOT EXISTS Card (
        id VARCHAR(64) PRIMARY KEY,
        holder_name DECIMAL NOT NULL,
        number NUMERIC NOT NULL,
        expiration_date DATE NOT NULL,
        cvv NUMERIC NOT NULL,
        payment_id VARCHAR(64) NOT NULL,
        Foreign Key (payment_id) REFERENCES Payment(id)
    );

    ALTER TABLE `Card` MODIFY COLUMN holder_name VARCHAR(64) NOT NULL;