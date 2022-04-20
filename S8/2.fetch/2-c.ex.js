/* En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas 
insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado. */

const btn$$ = document.querySelector("button");
const input$$ = document.querySelector("input");
const baseUrl = "https://api.nationalize.io?name=";
const divContain$$ = document.createElement("div");

divContain$$.classList.add("contain");
btn$$.addEventListener("click", () => {
  const url = "https://api.nationalize.io?name=" + input$$.value;
  input$$.value='';
  fetch(url)
    .then((res) => res.json())
    .then((datos) => mostrarHtml(datos));
});

function mostrarHtml(param) {
  const { name, country } = param;
  const div$$ = document.createElement("div");
  divContain$$.appendChild(div$$);
  div$$.classList.add("gray-box");
  document.body.appendChild(divContain$$);
  div$$.innerHTML = `
    <h2> ${name.toUpperCase()} </h2>   
`;

  for (const obj of country) {
    let porCiento = (obj.probability * 100).toFixed(2);
    const p2$$ = document.createElement("p");
    const p$$ = document.createElement("p");
    p$$.innerHTML = `Probabilidad: ${porCiento}%`;
    p2$$.innerHTML = `de ser del pais: ${obj.country_id}`;
    div$$.appendChild(p$$);
    div$$.appendChild(p2$$);
  }

  const button2$$ = document.createElement("button");
  button2$$.classList.add("del-btn");
  button2$$.innerText = "X";
  div$$.appendChild(button2$$);
  console.log(div$$);
  button2$$.addEventListener('click', () => {borrarHtml(div$$)})
  /* button2$$.addEventListener('click', borrarHtml(div$$)) */ 
}
 function borrarHtml(param){
  param.remove();
}








/* const { country_id, probability } = obj;
    let porCiento = (probability * 100).toFixed(2); // lo multiplico por 100 sólo con 2 decimales
    const p$$ = document.createElement("p");
    const p2$$ = document.createElement("p");
    const button$$ = document.createElement("button");
    button$$.setAttribute("id", "to-del-" + countId);
    button$$.classList.add("del-btn");
    p$$.classList.add(`"to-del-${countId}"`);
    p2$$.classList.add(`"to-del-${countId}"`);
    p$$.innerHTML = `Código pais: ${country_id}`;
    p2$$.innerHTML = `Probabilidad: ${porCiento}%`; // muestro este resultado
    button$$.innerText = "X";
    div$$.appendChild(p$$);
    div$$.appendChild(p2$$);
    div$$.appendChild(button$$); */
