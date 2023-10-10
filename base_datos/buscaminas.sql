drop database if exists buscaminas;
create database buscaminas;
use buscaminas;

create table bus(
	id_bus int not null primary key auto_increment,
    nombre_empresa varchar(200),
    capacidad int,
    anio_fabricacion int,
    placa varchar(200),
    ruta_id int not null,
    modelo_id int not null
);
create table modelo(
	id_modelo int not null primary key auto_increment,
    nombre varchar(200)
);
create table ruta(
	id_ruta int not null primary key auto_increment,
    origen varchar(200),
    destino varchar(200),
    distancia_km float,
    tiempo_minutos float
);
create table ruta_paradero(
	id int not null primary key auto_increment,
    ruta_id int not null,
    paradero_id int not null
);
create table paradero(
	id_paradero 	int not null primary key auto_increment,
    nombre 			varchar(200),
    latitud 		varchar(200),
    longitud 		varchar(200)
);
create table usuario(
	id_usuario 		int not null primary key auto_increment,
    nombres 		varchar(200),
    apellidos 		varchar(200),
    nickname 		varchar(200),
    correo 			varchar(200),
    contrasenia 	varchar(200),
    dni				varchar(8),
    bus_id			int not null,
    paradero_id		int not null
);
create table historial(
	id_historial 	int not null primary key auto_increment,
    usuario_id 		int not null
);


-- RELACIONES
ALTER TABLE bus ADD FOREIGN KEY (modelo_id) references modelo (id_modelo) on delete cascade on update cascade;
ALTER TABLE bus ADD FOREIGN KEY (ruta_id) references ruta(id_ruta) on delete cascade on update cascade;
ALTER TABLE ruta_paradero add foreign key (paradero_id) references paradero (id_paradero) on delete cascade on update cascade;
ALTER TABLE ruta_paradero add foreign key (ruta_id) references ruta(id_ruta) on delete cascade on update cascade;

alter table usuario add foreign key (bus_id) references bus(id_bus) on delete cascade on update cascade;
alter table usuario add foreign key (paradero_id) references paradero(id_paradero) on delete cascade on update cascade;
alter table historial add foreign key (usuario_id) references usuario(id_usuario) on delete cascade on update cascade;

