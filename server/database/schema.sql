create table library (
    id int unsigned primary key auto_increment not null,
    name varchar(100)
);

create table autor (
    id int unsigned primary key auto_increment not null,
    firstname varchar(100) not null,
    lastname varchar(100) not null
);

create table role (
    id int unsigned primary key auto_increment not null,
    titre varchar(50) not null
);

create table user (
    id int unsigned primary key auto_increment not null,
    pseudo varchar(50) not null unique,
    email varchar(150) not null unique,
    password varchar(250) not null,
    role_id int unsigned not null,
    foreign key (role_id) references role (id),
    library_id int unsigned not null,
    foreign key (library_id) references library (id)
);

create table book (
    id int unsigned primary key auto_increment not null,
    image text not null,
    name varchar(100) not null unique,
    description text not null,
    autor_id int unsigned not null,
    foreign key (autor_id) references autor (id),
    user_id int unsigned not null,
    foreign key (user_id) references user (id),
    library_id int unsigned not null,
    foreign key (library_id) references library (id)
);

INSERT INTO role (titre) VALUES ('Administrateur'), ('Utilisateur');

INSERT INTO library (name) VALUES ('Bibiothèque du petit chat');

INSERT INTO
    autor (firstname, lastname)
VALUES ('Eichiro', 'Oda'),
    ('Akira', 'Toriyama'),
    ('Hiromu', 'Arakawa'),
    ('Masashi', 'Kishimoto'),
    ('Yoshihiro', 'Togashi');