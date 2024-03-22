"use strict";
const movieAmount = prompt("How many movies do you want to enter?");

let movies = [];

for (let i = 0; i < movieAmount; i++) {
  const title = prompt("Enter the title of the movie");
  const rating = prompt("Enter the rating of the movie from 1-5");
  movies.push({ title: title, rating: rating });
}

function highestRatedMovie(movies) {
  let highestRated = movies[0];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating > highestRated.rating) {
      highestRated = movies[i];
    }
  }
  return highestRated;
}

const p = document.createElement("p");
document.body.appendChild(p);
p.textContent = `The highest rated movie is: ${
  highestRatedMovie(movies).title
}`;
