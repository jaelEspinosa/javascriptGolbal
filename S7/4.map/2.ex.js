/* Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y 
cambia el nombre a 'Anacleto' en caso de que empiece por 'A'. */

const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

/* const newUser = users.map( function(user){
      if (user.name[0] === "A"){
          user.name  = "Anacleto" 
      }else{
          user.name = user.name
      }
    return user
    } )

    console.log(newUser); */
 
    // con arrow seria aSi y obligatoriamente hay que utilizar el condicional ternario****************

    const newUser = users.map(user => user.name[0] === 'A' ? 'Anacleto' : user.name);
    console.log(newUser);