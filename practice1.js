// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const answer1 = prompt('Один из просмотренных фильмов?', ''),
//           answer2 = prompt('На сколько оцените его?', '');

//     if (answer1 != '' && answer2 != '' && answer1 != null && answer2 != null && answer1.length < 50) {
//         personalMovieDB.movies[answer1] = answer2;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
// }


// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }


// const number = 50;

// switch (number) {
//     case 49:
//         console.log("Неверно");
//         break;
//     case 50:
//         console.log("В точку!");
//         break;
//     default:
//         console.log("Не в этот раз");
//         break;
// }

function showFirstMessage() {
    console.log("Hello, world");
}

showFirstMessage();
