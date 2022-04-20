/* Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función: */
const insectos = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
let text = "Mosquito";

function findArrayIndex(array, text) {
    let respuesta;
  for (i = 0; i < array.length; i++) {
   // console.log(array[i],'---',text,'--',i) 
    if (array[i] === text) {
       respuesta = "El elemento, "+ text +  " Se encuentra en la posicion " + (i+1) + 'ª';
       return respuesta;
    }else{
       respuesta = 'El elmento no Existe'
    }
  }
  return respuesta;
}
  console.log(findArrayIndex(insectos, text));



/* Ej array:
````js
['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
````
 */
