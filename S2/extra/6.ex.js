/* Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array: */

const players = ["Mesirve","Cristiano Romualdo","Fernando Muralla","Ronalguiño"];
console.log('Array original antes de la function ',players);

function swap(array, index1, index2) {
 
  const elemento1 = array[index1];
  array[index1] = array[index2];
  array[index2] = elemento1;


  return array;
}



console.log(swap(players,0 ,3 ));

