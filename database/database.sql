CREATE DATABASE todoAPI;

CREATE TABLE TASKS(
    ID SERIAL PRIMARY KEY,
    NAME VARCHAR(40),
    DESCRIPTION VARCHAR(150)
);

INSERT INTO TASKS (NAME, DESCRIPTION) VALUES ('Etude GCH2730', 'Ecouter la video du chapitre 5.2 - Partie 3');
INSERT INTO TASKS (NAME, DESCRIPTION) VALUES ('Etude GCH2730', 'Ecouter la video du chapitre 5.2 - Partie 4');