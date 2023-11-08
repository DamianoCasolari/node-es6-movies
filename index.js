

// BONUS:
// Rendere le proprietà delle classi private e creare dei setter e dei getter per potervi accedere.
// Creare una classe Cart dove poter salvare i film che si intende noleggiare. Tramite delle funzioni, poter aggiungere o togliere dei film dal carrello. Creare poi una funzione che stampi il costo totale dei film da noleggiare, dove per ogni film occorre specificare un prezzo fisso di 3.99



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
  * @params {string} title
  * @params {string|Number} year
  * @params {string} genre
  * @params {string|Number} rating
  * @params {string} type
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
* @params {string} title
* @params {string|number} year
* @params {string} genre
* @params {string|number} rating
* @params {string} type
* @params {string|number} seasons
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
}

filterFilm("Sci-Fi")
console.log(listMoviesDescription);



// Eseguire tutto il codice da terminale tramite NodeJs e stampiamo nel terminale il risultato delle varie funzioni.
