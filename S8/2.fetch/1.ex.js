fetch("https://api.agify.io?name=michael")

  .then(res => res.json())

  .then(datos => pintarDatos(datos));

function pintarDatos(datos) {
  console.log(datos);
  document.write('edad: ',datos.age);
  document.write(' -nombre: ',datos.name);
}
