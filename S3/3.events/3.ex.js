/* Basandote en el siguiente html, añade un evento 'input' que ejecute 
un console.log con el valor del input. */

const input$$ = document.querySelector('input');

input$$.addEventListener('change', impConsola)

function impConsola(event){
    console.log(event.target.value)
}