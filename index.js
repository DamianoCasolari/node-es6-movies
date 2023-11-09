
const filmSerieTV = [
  {
    title: "Il Padrino",
    year: 1972,
    genre: "Crime, Drama",
    rating: 9.2,
    type: "movie"
  },
  {
    title: "Breaking Bad",
    year: 2008,
    genre: "Crime, Drama, Thriller",
    rating: 9.5,
    type: "tv",
    seasons: 5
  },
  {
    title: "Inception",
    year: 2010,
    genre: "Action, Adventure, Sci-Fi",
    rating: 8.8,
    type: "movie"
  },
  {
    title: "Game of Thrones",
    year: 2011,
    genre: "Action, Adventure, Drama",
    rating: 9.3,
    type: "tv",
    seasons: 8
  }
];


// create Movie class 
class Movie {

  /**
  * @param {string} title
  * @param {string|number} year
  * @param {string} genre
  * @param {string|number} rating
  * @param {string} type
  */
  constructor(title, year, genre, rating, type) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
    this.type = type;
  }


  toString() {
    return `${this.title} è un film di genere ${this.genre}. E’ stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`
  }

}


// create TvSeries extended class 
class TvSeries extends Movie {
  /**
* @param {string} title
* @param {string|number} year
* @param {string} genre
* @param {string|number} rating
* @param {string} type
* @param {string|number} seasons
*/
  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type)
    this.seasons = seasons;
  }

  toString() {

    return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`

  }
}


// create a list of instances from the correct class

const istancesArray = filmSerieTV.map((movieSerie, index) => {

  const { title, year, genre, rating, type, seasons } = movieSerie

  if (movieSerie.type == "movie") {

    return new Movie(title, year, genre, rating, type)

  } else if (movieSerie.type == "tv") {

    return new TvSeries(title, year, genre, rating, type, seasons)

  }
})

console.log(istancesArray);



// Let's create a function that returns the average ratings of all films for a given genre. Provide a topic for the list of films and one for the genre.


function avarageRating(genre) {

  let totalRatings = 0
  let numberFilms = 0

  filmSerieTV.forEach((movie) => {


    const generesList = movie.genre.split(", ")

    for (let index = 0; index < generesList.length; index++) {
      if (generesList[index] == genre) {
        numberFilms++
        totalRatings += parseFloat(movie.rating)
        break;
      }
    }
  })
if(numberFilms > 0) {
  let avarage = totalRatings / numberFilms
  return console.log(`La media dei ratings dei film di genere ${genre} è di ${avarage}`); 

} else {
  return console.log(`Non abbiamo film di genere ${genre}`); 
 
}}

avarageRating("ciccio")


// create a list of generes 

const uniqueGenres = [];

filmSerieTV.forEach(item => {

  const generes = item.genre.split(", ")

  for (let index = 0; index < generes.length; index++) {

    if (!uniqueGenres.includes(generes[index])) {

      uniqueGenres.push(generes[index]);

    }

  }

});

console.log(uniqueGenres);



// Create a method that can filter the list of movies by the selected genre

const listMoviesDescription = []

function filterFilm(genre) {

  istancesArray.forEach((movie) => {

    const generesList = movie.genre.split(", ")

    for (let index = 0; index < generesList.length; index++) {
      if (generesList[index] == genre) {

        listMoviesDescription.push(movie.toString())
        break;
      }
    }
  })
 return  console.log(listMoviesDescription);
}

filterFilm("Sci-Fi")



// Make class properties private and create setters and getters to access them.


// create Movie class with private proprieties
class MoviePrivate {
  #title
  #year
  #genre
  #rating
  #type
  /**
  * @param {string} title
  * @param {string|number} year
  * @param {string} genre
  * @param {string|number} rating
  * @param {string} type
  */
  constructor(title, year, genre, rating, type) {
    this.#title = title;
    this.#year = year;
    this.#genre = genre;
    this.#rating = rating;
    this.#type = type;
  }
 

  toString() {
    return `${this.title} è un film di genere ${this.genre}. E’ stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`
  }


// Get function 

  get title(){
    return this.#title 
  }
  get year(){
    return this.#year 
  }
  get genre(){
    return this.#genre 
  }
  get rating(){
    return this.#rating 
  }
  get type(){
    return this.#type 
  }

  // Set function 

  set title(value) {
    if (!value || !value.trim()) {
      throw new Error("Il titolo è obbligatoria");
    }

    this.#title = value.toLowerCase();
  }
  set year(value) {
    if (!value || !value.trim()) {
      throw new Error("'anno è obbligatoria");
    }

    this.#year = value.toLowerCase();
  }
  set genre(value) {
    if (!value || !value.trim()) {
      throw new Error("Il genere è obbligatoria");
    }

    this.#genre = value.toLowerCase();
  }
  set rating(value) {
    if (!value || !value.trim()) {
      throw new Error("il rating è obbligatoria");
    }

    this.#rating = value.toLowerCase();
  }
  set type(value) {
    if (!value || !value.trim()) {
      throw new Error("il type è obbligatoria");
    }

    this.#type = value.toLowerCase();
  }



}

const movieExample = new MoviePrivate("Matrix","1999","action", 9, "movie")
movieExample.title = "Matrix 2"
console.log(movieExample.title);






// create TvSeries extended class with private proprieties
class TvSeriesPrivate extends MoviePrivate {
  /**
* @param {string} title
* @param {string|number} year
* @param {string} genre
* @param {string|number} rating
* @param {string} type
* @param {string|number} seasons
*/
#seasons;
  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type)
    this.#seasons = seasons;
  }


  get seasons(){
    return this.#seasons
  }

  set seasons(value) {
    this.#seasons = value.toLowerCase()
  }

  toString() {

    return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`

  }
}

const movieExampleTv = new TvSeriesPrivate("Matrix","1999","action", 9, "movie", 9)
movieExampleTv.seasons = "2"
console.log(movieExampleTv.seasons);







// Creare una classe Cart dove poter salvare i film che si intende noleggiare. Tramite delle funzioni, poter aggiungere o togliere dei film dal carrello. Creare poi una funzione che stampi il costo totale dei film da noleggiare, dove per ogni film occorre specificare un prezzo fisso di 3.99



