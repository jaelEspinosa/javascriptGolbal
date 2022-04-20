/* En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api 
que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ. */

const btn$$ = document.querySelector("button");
const input$$ = document.querySelector("input");
const baseUrl = "https://api.nationalize.io?name=";
const divContain$$ = document.createElement("div");
divContain$$.classList.add("contain");
btn$$.addEventListener("click", () => {
  console.log(input$$.value);
  const url = "https://api.nationalize.io?name=" + input$$.value;

  fetch(url)
    .then((res) => res.json())

    .then((datos) => mostrarHtml(datos));
});

function mostrarHtml(param) {
  console.log(param);
  const { name, country } = param;
  const div$$ = document.createElement("div");
  divContain$$.appendChild(div$$);
  div$$.classList.add("gray-box");
  document.body.appendChild(divContain$$);
  div$$.innerHTML = `
    <h2> ${name.toUpperCase()} </h2>
    <h4>Nombre : ${name}</h4>
   
`;
  for (const obj of country) {
    const { country_id, probability } = obj;
    let porCiento = (probability * 100).toFixed(2); // lo multiplico por 100 sólo con 2 decimales
    const p$$ = document.createElement("p");
    const p2$$ = document.createElement("p");
    p$$.innerHTML = `Código pais: ${country_id}`;
    p2$$.innerHTML = `Probabilidad: ${porCiento}%`; // muestro este resultado
    div$$.appendChild(p$$);
    div$$.appendChild(p2$$);
  }
}
