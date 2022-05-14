"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

function rememberMyFilms(){
    for(let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("Насколько вы его оцените?", "");
        if(a != null && b !=null && a != '' && b != '' && a.length < 50) { // Проверка ввода данных (Не больше 50 символов, не пустая строка)
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }  
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log("Просмотренно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Error"); 
    }
}

// detectPersonalLevel();

// console.log(personalMovieDB);

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for(let i = 1; i <= 3;i++){
        const question = prompt(`Ваш любимый жанр под номером ${i}`,'');
        personalMovieDB.genres[i - 1] = question;
    } 
}

writeYourGenres();