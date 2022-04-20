/* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y 
pelicula grande, mas de 200 minutos. Imprime cada array en por consola. */

const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];
const moviesShort = [];
const moviesLarge = [];
const moviesXxl = [];

for (const movie of movies){
  //  console.log(movie)

  if (movie.durationInMinutes < 100){
      moviesShort.push(movie.name)
  }else if(movie.durationInMinutes >100 && movie.durationInMinutes<= 200){
      moviesLarge.push(movie.name)
  }else{
      moviesXxl.push(movie.name)
  }
}

console.log ('las pelis de menos de 100 min. son :'.toUpperCase());
for (const movie of moviesShort) {
    console.log(movie);
    }
console.log ('las pelis largas, entre 100 y 200 min. son :'.toUpperCase());
for (const movie of moviesLarge) {
    console.log(movie);
    }
console.log ('las pelis de mas  de 200 min. son :'.toUpperCase());
for (const movie of moviesXxl) {
    console.log(movie);
    }