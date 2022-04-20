const url = "http://localhost:3000/diary";

function delHtml(dato) {
  dato.remove();
}

fetch(url)
  .then((res) => res.json())
  .then((datosJson) => printHtml(datosJson));

function printHtml(datos) {
  console.log(datos);
  /* const newDatos = datos.sort( (a, b) => new Date(a.fechas).getTime() > new Date(b.fechas).getTime() ); */
  const sortedDatos = datos.sort((a, b) => new Date(a.date) - new Date(b.date));
  console.log(sortedDatos);
  const divCont$$ = document.createElement("div");
  divCont$$.classList.add("contain");

  for (const dato of sortedDatos) {
    const div$$ = document.createElement("div");
    const h3$$ = document.createElement("h3");
    const h5$$ = document.createElement("h5");
    const p$$ = document.createElement("p");
    const btnDel$$ = document.createElement("button");

    div$$.classList.add("element");
    btnDel$$.innerHTML = "Eliminar";
    h3$$.innerText = dato.title;
    h5$$.innerText = dato.date;
    p$$.innerText = dato.description;

    div$$.appendChild(h3$$);
    div$$.appendChild(h5$$);
    div$$.appendChild(p$$);
    div$$.appendChild(btnDel$$);
    divCont$$.appendChild(div$$);

    btnDel$$.addEventListener("click", () => {
      delHtml(div$$);
    });
  }
  document.body.appendChild(divCont$$);
}
