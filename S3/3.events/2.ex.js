/* Basandote en el siguiente html, añade un evento 'focus'
 que ejecute un console.log con el valor del input. */

 const input$$ = document.querySelector('input');

 input$$.addEventListener('focus', impConsola)

 function impConsola(){
     console.log('has hecho focus')
 }