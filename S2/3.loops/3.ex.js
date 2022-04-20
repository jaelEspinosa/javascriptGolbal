/* Usa un bucle for para recorrer todos los destinos del array y 
elimina los elementos que tengan el id 11 y 40. Imprime en un 
console log el array. Puedes usar este array: */

const placesToTravel = [
    { id: 5, name: "Japan" },
    { id: 11, name: "Venecia" },
    { id: 23, name: "Murcia" },
    { id: 40, name: "Santander" },
    { id: 44, name: "Filipinas" },
    { id: 59, name: "Madagascar" },
  ];
  
  for (let index = 0; index <= placesToTravel.length; index++) {
    let obj = placesToTravel[index];
  
    for (const key in obj) {
      if (obj[key] === 11 || obj[key] === 40) {
        console.log('este lo borra ',obj, index);
        placesToTravel.splice(index, 1);
      }
    }
  }
  
  console.log(placesToTravel)
  