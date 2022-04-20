/* Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!',
 dentro de todos los div con la clase .fn-insert-here */



 const div$$ = document.querySelector('div');

const divDeEnMedio$$ = document.createElement('div');
divDeEnMedio$$.textContent="Estoy dentro!";
divDeEnMedio$$.classList="fn-insert-here"
div$$.appendChild(divDeEnMedio$$);