/* Basandote en el html siguiente, elimina el elemento que tenga la clase .fn-remove-me. */


const p$ = document.querySelector('.fn-remove-me');

setTimeout(() => {
    p$.remove();
}, 2000);