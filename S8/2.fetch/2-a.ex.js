/* Dado el siguiente javascript y html. Añade la funcionalidad 
necesaria usando fetch() para hacer una consulta a la api cuando 
se haga click en el botón, pasando como parametro de la api, el valor del input. */

const btn$$ = document.querySelector("button");
const input$$ = document.querySelector("input");

btn$$.addEventListener("click", () => {
  console.log(input$$.value);
  const url = "https://api.agify.io?name=" + input$$.value;

  fetch(url)
    .then((res) => res.json())

    .then((datos) => mostrarHtml(datos));
});
function mostrarHtml(param) {
  div$$=document.createElement('div');
  div$$.classList.add("gray-box");
  document.body.appendChild(div$$)
  div$$.innerHTML=(`
  <div>
  <h2>" ${param.name} "</h2>
  <h4>Nombre : ${param.name}</h4>
  <h4>Edad : ${param.age}</h4>
  <h4>count : ${param.count}</h4>
    </div>
`);

  console.log(param);
}

