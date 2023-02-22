CREATE DATABASE gestion_alumnos;
USE gestion_alumnos;
##DROP DATABASE gestion_alumnos;

CREATE TABLE Alumnos(
id INT AUTO_INCREMENT PRIMARY KEY,
nombres VARCHAR(255),
apellidos VARCHAR(255),
sexo CHAR(1),
fecha_nacimiento DATE,
fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Cursos(
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255),
descripcion VARCHAR(255),
fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Alumnos_Cursos(
alumno_id INT NOT NULL,
curso_id INT NOT NULL,
fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (alumno_id, curso_id),
FOREIGN KEY (alumno_id) REFERENCES Alumnos(id) ON DELETE CASCADE,
FOREIGN KEY (curso_id) REFERENCES Cursos(id) ON DELETE CASCADE
);

CREATE TABLE Notas(
alumno_id INT NOT NULL,
curso_id INT NOT NULL,
practica1 DECIMAL(4,2),
practica2 DECIMAL(4,2),
practica3 DECIMAL(4,2),
parcial DECIMAL(4,2),
final DECIMAL(4,2),
PRIMARY KEY (alumno_id, curso_id),
FOREIGN KEY (alumno_id) REFERENCES Alumnos(id) ON DELETE CASCADE,
FOREIGN KEY (curso_id) REFERENCES Cursos(id) ON DELETE CASCADE
);

CREATE TABLE Pesos(
practicas INT NOT NULL,
parcial INT NOT NULL,
final INT NOT NULL
);

INSERT INTO Alumnos values(1,"abelA","silva","M","1997/03/27",CURRENT_TIME());
INSERT INTO CURSOS values(1,"PROGRAMACION","THIS IS FIRST ",current_time());
INSERT INTO Alumnos values(2,"Anthony","Santa CRuz","M","1997/03/27",CURRENT_TIME());
INSERT INTO CURSOS values(2,"BBDD","THIS IS SECOND ",current_time());
INSERT INTO Alumnos_Cursos values(1,1,CURRENT_TIME);
INSERT INTO Alumnos_Cursos values(1,2,CURRENT_TIME);
INSERT INTO Alumnos_Cursos values(2,1,CURRENT_TIME);
INSERT INTO Alumnos_Cursos values(2,2,CURRENT_TIME);
INSERT INTO notas (alumno_id,curso_id,practica1,practica2,practica3,parcial,final) values(1,1,11,18,11,15,15.6);
INSERT INTO notas (alumno_id,curso_id,practica1,practica2,practica3,parcial,final) values(1,2,15,10,11,16,14.2);
INSERT INTO notas (alumno_id,curso_id,practica1,practica2,practica3,parcial,final) values(2,1,16,12,11,17,12.5);
INSERT INTO notas (alumno_id,curso_id,practica1,practica2,practica3,parcial,final) values(2,2,17,15,11,14,11.5);

/*delete from alumnos where id=1;
select * from notas where alumno_id='2' and curso_id='1'
select * from notas*/
