/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises. */

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul$$ = document.createElement("ul");

for (const country of countries) {
  console.log(country)
     const li$$=document.createElement('li')
     li$$.innerText = country;
     ul$$.appendChild(li$$)
}
document.body.appendChild(ul$$)