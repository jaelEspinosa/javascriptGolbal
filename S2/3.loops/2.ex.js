/* Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto: */


const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
console.log(alien.name)
for (const index in alien){
    console.log( index+ ': '+alien[index])
}