/* En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9. */


const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]
let aNumber = 0;

for (let i=0 ; i<animals.length; i++){
    for(let j=0; j<animals[i].length; j++){
        if (animals[i][j] === 'a'){
            aNumber++
        }
    }
}

console.log('animals tiene la letra "A" repetida ',aNumber,' veces');
