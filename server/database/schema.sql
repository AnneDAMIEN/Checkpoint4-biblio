-- SQLBook: Code
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
    user (
        pseudo,
        email,
        password,
        role_id,
        library_id
    )
VALUES (
        'admin',
        'admin@gmail.com',
        'Ghi867i',
        '1',
        '1'
    ),
    (
        'Petit Chat',
        'petitchat@gmail.com',
        '98kdb!T',
        '2',
        '1'
    );

INSERT INTO
    autor (firstname, lastname)
VALUES ('Eichiro', 'Oda'),
    ('Akira', 'Toriyama'),
    ('Hiromu', 'Arakawa'),
    ('Masashi', 'Kishimoto'),
    ('Yoshihiro', 'Togashi'),
    ('Suu', 'Morishita'),
    ('Kyousuke', 'Motomi');

INSERT INTO
    book (
        image,
        name,
        description,
        autor_id,
        user_id,
        library_id
    )
VALUES (
        'https://www.glenat.com/sites/default/files/images/livres/couv/9782723488525-T.jpg',
        'One Piece T1',
        'Le premier tome de One Piece introduit le personnage principal, Monkey D. Luffy, un jeune garçon qui rêve de devenir le Roi des Pirates en trouvant le légendaire trésor appelé One Piece. L\'histoire commence par un flashback montrant Luffy enfant, vivant dans un village où il rencontre Shanks le Roux, un pirate qui devient son modèle. Un jour, Luffy mange par accident un Fruit du Démon, le Gomu Gomu no Mi, qui le rend capable d\'étirer son corps comme du caoutchouc mais l\'empêche de nager.',
        '1',
        '2',
        '1'
    ),
    (
        'https://m.media-amazon.com/images/I/61of+KGNJIL._SY445_SX342_.jpg',
        'One Piece T2',
        'Le premier tome de One Piece introduit le personnage principal, Monkey D. Luffy, un jeune garçon qui rêve de devenir le Roi des Pirates en trouvant le légendaire trésor appelé One Piece. L\'histoire commence par un flashback montrant Luffy enfant, vivant dans un village où il rencontre Shanks le Roux, un pirate qui devient son modèle. Un jour, Luffy mange par accident un Fruit du Démon, le Gomu Gomu no Mi, qui le rend capable d\'étirer son corps comme du caoutchouc mais l\'empêche de nager.',
        '1',
        '2',
        '1'
    ),
    (
        'https://m.media-amazon.com/images/I/51s06rGuk-L._SY445_SX342_.jpg',
        'One Piece T3',
        'Dans le Tome 3, Luffy, Zoro et Nami arrivent sur une nouvelle île où ils rencontrent Usopp, un jeune menteur et capitaine autoproclamé de son propre équipage de pirates. Usopp passe son temps à raconter des histoires grandioses et à effrayer les habitants du village avec de fausses alertes de pirates. Luffy découvre que le village est menacé par Kuro, un ancien capitaine pirate déguisé en majordome nommé Klahadore, qui prévoit de tuer la riche héritière Kaya pour s\'emparer de sa fortune.',
        '1',
        '2',
        '1'
    ),

(
    'https://m.media-amazon.com/images/I/913wc4EdSlL._SY466_.jpg',
    'One Piece T4',
    'Dans le Tome 4, Luffy et son équipage continuent leur aventure et arrivent au Baratie, un restaurant flottant dirigé par Zeff aux Pieds Rouges. Là, ils rencontrent Sanji, un chef talentueux et combattant hors pair. Pendant leur séjour, le restaurant est attaqué par Don Krieg, un pirate redoutable, et son équipage, qui cherchent à s\'emparer du Baratie pour survivre après une défaite dans la Grand Line',
    '1',
    '2',
    '1'
),

(
    'https://m.media-amazon.com/images/I/61xf6EHnTIL._SY445_SX342_.jpg',
    'One Piece T5',
    'Dans le Tome 5, Luffy et son équipage se dirigent vers le village de Coco, la ville natale de Nami. Ils découvrent que Nami les a trahis pour rendre l\'argent volé au terrible Arlong, un homme-poisson qui terrorise la région. Nami travaille pour Arlong dans l\'espoir de racheter son village.',
    '1',
    '2',
    '1'
),

(
    'https://m.media-amazon.com/images/I/51xMcx1xe0L._SY445_SX342_.jpg',
    'One Piece T6',
    'Dans le Tome 6, la bataille entre l\'équipage de Luffy et Arlong s\'intensifie. Luffy, Zoro, Sanji et Usopp se battent contre les hommes-poissons d\'Arlong pour libérer Nami et son village. Les combats sont féroces, mais l\'équipage de Luffy parvient à prendre le dessus grâce à leur détermination et à leurs compétences.',
    '1',
    '2',
    '1'
),

(
    'https://m.media-amazon.com/images/I/51fafCcC8BL._SY445_SX342_.jpg',
    'One Piece T7',
    'Dans le Tome 7, l\'équipage de Luffy quitte le village de Coco après leur victoire sur Arlong et met le cap sur la Grand Line. Avant de partir, ils sont poursuivis par une marine corrompue menée par le capitaine Nezumi, qui cherche à s\'emparer de la prime sur la tête de Luffy.',
    '1',
    '2',
    '1'
),

(
    'https://m.media-amazon.com/images/I/51LBGOEu-4L._SY445_SX342_.jpg',
    'Dragon Ball Z T1',
    'Le Tome 1 de Dragon Ball Z commence avec l\'arrivée de Raditz, un mystérieux guerrier extraterrestre, sur Terre. Il révèle à Goku qu\'il est son frère aîné et qu\'ils sont tous deux des Saiyans, une race de guerriers puissants. Raditz enlève Gohan, le fils de Goku, pour forcer Goku à rejoindre les Saiyans dans leur quête de conquête.',
    '2',
    '2',
    '1'
),

(
    'https://m.media-amazon.com/images/I/31iMkBNI+KL.jpg',
    'Dragon Ball Z T2',
    'Dans le Tome 2 de Dragon Ball Z, Goku continue son voyage dans l\'au-delà pour s\'entraîner avec Maître Kaio afin de se préparer à l\'arrivée des Saiyans. Pendant ce temps, sur Terre, les amis de Goku se préparent également à la menace imminente. Piccolo commence à entraîner Gohan, qui révèle un potentiel énorme malgré son jeune âge.',
    '2',
    '2',
    '1'
),

(
    'https://m.media-amazon.com/images/I/71SKdIc3I2L._SY466_.jpg',
    'FullMetal Alchemist T1',
    'Les frères Edward et Alphonse Elric cherchent désespérément à retrouver leurs corps perdus après une expérience alchimique qui a mal tourné. Ils se lancent dans un voyage périlleux à travers un monde où l\'alchimie règne, tout en affrontant des ennemis dangereux et en découvrant les secrets de la pierre philosophale.',
    '3',
    '2',
    '1'
),

(
    'https://m.media-amazon.com/images/I/61OQ4hiz3yL._SY466_.jpg',
    'FullMetal Alchemist T2',
    'Edward et Alphonse poursuivent leur quête pour retrouver leurs corps, confrontés à des alchimistes maléfiques et à des intrigues politiques complexes. Ils découvrent également des informations cruciales sur les origines de la pierre philosophale et sur les dangers qui les entourent.',
    '3',
    '2',
    '1'
),

(
    'https://www.planetebd.com/dynamicImages/album/cover/large/42/18/album-cover-large-42187.jpg',
    'FullMetal Alchemist T3',
    'Les frères Elric affrontent de nouveaux défis alors qu\'ils explorent les mystères de l\'alchimie et les conséquences de leurs actions passées. Leurs aventures les mènent à des révélations surprenantes sur la nature de la magie alchimique et sur les forces obscures qui menacent leur monde.',
    '3',
    '2',
    '1'
),

(
    'https://bdi.dlpdomain.com/album/9782871294146/couv/M400x500/naruto-t1.jpg',
    'Naruto T1',
    'Naruto Uzumaki, un jeune ninja bruyant et maladroit, aspire à devenir le plus grand ninja de son village malgré le rejet des autres. Avec l\'aide de ses amis et de son mentor, Naruto entreprend un voyage pour se faire reconnaître tout en affrontant des ennemis redoutables et en découvrant ses propres pouvoirs.',
    '4',
    '2',
    '1'
);