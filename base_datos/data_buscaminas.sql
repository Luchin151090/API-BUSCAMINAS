INSERT INTO modelo (nombre) values ("nissan"),("toyota"),("mitsubishi");
INSERT INTO ruta (origen,destino,distancia_km,tiempo_minutos) values
 ("terminal cerro colorado","astoria",3.4,30),
 ("los cristales","av peru",6.6,56),
 ("huaranguillo","terminal paucarpata baden",8.0,100);
insert into paradero (nombre, latitud, longitud) values 
	("7 esquinas", "16°24'07.2S", "71°32'23.8W"),
    ("salaverry", "16°24'20.5S", "71°32'24.2W"),
    ("radio patrulla", "16°24'18.3S", "71°29'43.3W");
INSERT INTO bus (nombre_empresa,placa,anio_fabricacion,capacidad,ruta_id,modelo_id)
values ("COTUM S.A.","V8H-123",1996,49,1,1),("C-GRAMPO","XYA-123",2000,48,1,2),
("AMARGURA P","AAK-123",2000,48,1,3);
INSERT INTO ruta_paradero(paradero_id,ruta_id)values(1,2),(2,1),(3,3);
insert into usuario (nombres, apellidos, nickname, correo, contrasenia, dni, bus_id, paradero_id) values 
	("Jorge Luis", "Cano Cerpia", "JorgeCerpia", "Jorge@gmail.com", "123456", "24785298",1 ,1),
    ("Jorge Manuel", "Pinto Gutierrez", "Guti", "guti_123@gmail.com", "123", "32587419",2 ,2 ),
    ("Maria Elena", "Paredes Apaza", "PintoParedes", "PintoParedes@gmail.com", "2357", "72485618",3 ,3 );
insert into historial (usuario_id) values (1),(2),(3);