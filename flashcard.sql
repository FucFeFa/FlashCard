create database flashcard;
use flashcard;

create table users (
	`user_id` int auto_increment primary key,
    `user_username` varchar(255) unique not null,
    `user_password` varchar(255) not null,
    `user_fullname` varchar(255) not null,
    `user_email` varchar(255) unique,
    `user_phone` varchar(10) unique,
    `user_sex` boolean,
    `user_date_signup` varchar(255),
    `user_avatar` varchar(255) default './asset/img/default.jpg'
);

create table card (
	`card_id` int auto_increment primary key,
    `card_term` varchar(255) not null,
    `card_definition` varchar(255) not null,
    `flashcard_id` int not null unique,
    foreign key (`flashcard_id`) references flashcard_set(`flashcard_id`)
);

create table flashcard_set(
	`flashcard_id` int auto_increment primary key,
    `flashcard_title` varchar(255) not null,
    `flashcard_description` varchar(255),
    `library_id` int not null,
    foreign key (`library_id`) references library(`library_id`)
);

create table library (
	`library_id` int auto_increment primary key,
	`user_id` int not null unique,
    foreign key (`user_id`) references users(`user_id`)
);
