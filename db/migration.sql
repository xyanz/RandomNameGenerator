-- \c rnd_name_gen_dev;
DROP TABLE IF EXISTS generated;
DROP TABLE IF EXISTS names;
DROP TABLE IF EXISTS months;



CREATE TABLE generated (
  id SERIAL PRIMARY KEY,
  generatedFName VARCHAR(255)
);
CREATE TABLE names (
  id SERIAL PRIMARY KEY,
  letter VARCHAR(255),
  letterMatch VARCHAR(255),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TABLE months (
  id SERIAL PRIMARY KEY,
  month VARCHAR(255),
  monthMatch VARCHAR(255),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);



