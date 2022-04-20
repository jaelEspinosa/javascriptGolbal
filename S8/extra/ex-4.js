const divPlanets$$ = document.querySelector('[data-function="planets"]');
const divChaaraters$$ = document.querySelector('[data-function="characters"]');
const input$$ = document.createElement("input");
const btn$$ = document.createElement("button");
btn$$.innerHTML='Aplicar filtro'
const urlPlanets = "http://localhost:3000/planets";


console.log(urlPlanets);
fetch(urlPlanets)
  .then((res) => res.json())
  .then((result) => showGallery(result));

function showGallery(datos) {
  console.log(datos);
  for (const planeta of datos) {
    const div$$ = document.createElement("div");
    div$$.classList.add("planets");
    const h3$$ = document.createElement('h3');
    const img$$ = document.createElement('img');
    h3$$.innerHTML = planeta.name;
    img$$.src = planeta.image;
    div$$.appendChild(h3$$);
    div$$.appendChild(img$$);
    img$$.addEventListener("click", () => {
      getInfo(div$$, planeta.id);
    });
    divPlanets$$.classList.add("planets-contain");
    divPlanets$$.appendChild(div$$);
  }
}

function getInfo(div$$, planeta) {
  div$$.appendChild(input$$);
  div$$.appendChild(btn$$);
  btn$$.addEventListener('click', ()=>{
    filter(input$$.value.toLowerCase(),planeta);
      })
  const url = `http://localhost:3000/characters?idPlanet=${planeta}`;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((resultado) => showInfo(resultado));
}

function showInfo(characters) {
  cleanHtml();
  
  for (const character of characters) {
    const div$$ = document.createElement("div");
    const h3$$ = document.createElement("h3");
    const p$$ = document.createElement("p");
    const img$$ = document.createElement("img");

    img$$.src = character.avatar;
    h3$$.innerText = character.name;
    p$$.innerText = character.description;

    div$$.classList.add("cart");
    div$$.appendChild(h3$$);
    div$$.appendChild(img$$);
    div$$.appendChild(p$$);
    divChaaraters$$.classList.add("cart-contain");
    divChaaraters$$.appendChild(div$$);
  }
}
function cleanHtml() {
  while (divChaaraters$$.firstChild) {
    divChaaraters$$.removeChild(divChaaraters$$.firstChild);
  }
}
function filter(person, planeta){
    input$$.value='';
    const url = `http://localhost:3000/characters?idPlanet=${planeta}`;
    fetch(url)
    .then((res) => res.json())
    .then((resultado) => filterInfo(resultado));
   
   function filterInfo(resultado){
       
    const newResultado = resultado.filter( resultado => resultado.name.toLowerCase().includes(person.toLowerCase()));
    showInfo(newResultado);
   } 
}