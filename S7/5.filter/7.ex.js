/* Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra
 introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
  introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const handleChange = event => {
 // console.log(input$$.value)
const streamersFiltered = streamers.filter(streamer => streamer.name.toLowerCase().includes(input$$.value.toLowerCase())) 
console.log(streamersFiltered)
for (const streamer of streamersFiltered) {
  console.log ('Nombre: ',streamer.name, 'Juego mas Usado:  ',streamer.gameMorePlayed);
  
}


}




const input$$ = document.querySelector('[data-function="toFilterStreamers"]')

input$$.addEventListener('input', handleChange)

