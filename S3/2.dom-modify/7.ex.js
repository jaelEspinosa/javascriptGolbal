/* Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me */

const p$$ = document.querySelectorAll('.fn-remove-me')

console.log(p$$);

for (let i=0 ; i < p$$.length; i++){
    p$$[i].remove();
}