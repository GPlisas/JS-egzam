/**
 * /* ------------------------------ TASK 9 ---------------------------------------------------------------
 * Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.
 *
 * Savybės:
 * title: string
 * director: string
 * budget: number
 *
 * Metodas:
 * wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false.
 * ------------------------------------------------------------------------------------------------------
 *
 * @format
 */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    if (this.budget > 100000000) {
      return "The movie - " + this.title + " was expensive: " + true;
    } else {
      return "The movie - " + this.title + " was expensive: " + false;
    }
  }
}

let movie1 = new Movie(
  "Star Wars : Return of the Jedi",
  "George Lucas",
  32500000
);
let movie2 = new Movie(
  "Star Wars: The Empire Strikes Back (Episode V)",
  "George Lucas",
  18000000
);
let movie3 = new Movie(
  "Pirates of the Caribbean: On Stranger Tides",
  "Rob Marshall",
  378500000
);

console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());
console.log(movie3.wasExpensive());
