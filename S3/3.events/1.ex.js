/* Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */

const btnToClick$$ = document.createElement('button');
btnToClick$$.setAttribute('id' , "btnToClick");
btnToClick$$.innerText='Click'

document.body.appendChild(btnToClick$$);

const btn = document.querySelector('#btnToClick');
btn.addEventListener('click', clickFunction)

function clickFunction(){
    console.log('me diste click...')
}