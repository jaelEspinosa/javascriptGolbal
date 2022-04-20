/* Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. 
Recuerda que no solo puedes insertar elementos con .appendChild. */


const div$$ = document.querySelector('div');

const divDeEnMedio$$ = document.createElement('div');
divDeEnMedio$$.textContent="Estoy en medio!";
div$$.appendChild(divDeEnMedio$$);