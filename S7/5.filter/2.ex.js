/* Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par. */


const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];


/* const parAges = ages.filter(function(param){
    return   param%2===0;
}); */


// Arrow function seria asi


const parAges = ages.filter ( param =>  param%2===0);

console.log(parAges)
       



