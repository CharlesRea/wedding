DROP TABLE Rsvp;

CREATE TABLE Rsvp (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  canAttend BOOLEAN NOT NULL,
  email VARCHAR(200) NULL,
  dietaryRequirements VARCHAR(2000) NULL,
  comments VARCHAR(5000) NULL
);