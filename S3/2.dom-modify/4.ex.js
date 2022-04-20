/* Inserta dinamicamente con javascript en un html una
 p con el texto 'Soy dinámico!'. */
 console.log('hola')
 const p$$ = document.createElement('p');

 p$$.innerHTML='Soy Dinámico';
 document.body.appendChild(p$$);
