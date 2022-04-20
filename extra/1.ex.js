/* Crea una función llamada splitName que divida un nombre completo en nombre y apellido. Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.

De tal modo que si tenemos el texto "Abel Cabeza" obtendremos dos variables...una con el valor "Abel" y otra con el valor "Cabeza".

En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf() */

let name = "Abel Cabeza";

// esto seria una forma

/* const splitName = (param) => {
  let first_name = param.slice(0, param.indexOf(" "));
  let last_name = param.slice(param.indexOf(" ") + 1, param.length);

  return console.log("nombre: ", first_name, " Apellido: ", last_name);
};

splitName(name); */

// y esto otra

const splitName = (param) => {
  let a = param.split(" ");
  return console.log("apellido : ", a[1], "nombre", a[0]);
};

splitName(name);
