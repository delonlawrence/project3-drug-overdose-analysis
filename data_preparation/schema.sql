-- DROP TABLE "ct_overdose_deaths";


-- Delete rows that have no DeathCity or DeathCounty
BEGIN;

DELETE FROM ct_overdose_deaths
WHERE "DeathCounty" IS NULL;

DELETE FROM ct_overdose_deaths
WHERE "DeathCity" IS NULL;


COMMIT;

-- Adjust data type in date column
ALTER TABLE ct_overdose_deaths
ALTER COLUMN "Date" TYPE DATE USING "Date"::DATE;

ALTER TABLE ct_overdose_deaths
DROP COLUMN "Unnamed: 0";

SELECT *
FROM ct_overdose_deaths;



