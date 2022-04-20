/* Dado el siguiente html usa querySelector para mostrar por consola el 3
 personaje con el atributo data-function="testMe". */

const $$fnTestme = document.querySelectorAll('[data-function="testMe"]');

//console.log($$fnTestme)

for (i=0;i<$$fnTestme.length;i++){
    if(i===2){
        console.log($$fnTestme[i]);
    }
}