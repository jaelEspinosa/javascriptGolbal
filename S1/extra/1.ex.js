/* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" 
y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:". */

const users = [
  { name: "Abel", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];
const mayores = [];
const menores = [];

for (const user of users) {
  if (user.years >= 18) {
    mayores.push(user.name);
  //  console.log(user.name);
  } else {
    menores.push(user.name);
  }
}
console.log('LISTADO DE MAYORES DE EDAD:')

for (let i=0 ; i < mayores.length ; i ++){
  console.log(mayores[i])
}
console.log('LISTADO DE MENORES')
for (let i=0 ; i < menores.length ; i ++){
  console.log(menores[i])
}






