/* En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en
 la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario 
 usar el endpoint 'https://breakingbadapi.com/api/characters'.

Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'. */


const h1$$=document.createElement('h1')
h1$$.textContent="BREACKING BAD PHOTO GALLERY";
h1$$.classList.add('title')
const divGallery$$ = document.createElement('div');

document.body.appendChild(h1$$);
document.body.appendChild(divGallery$$); 


fetch("https://breakingbadapi.com/api/characters")

    .then (res => res.json())

    .then(datos => printHtml(datos))




function printHtml(params){
  for (const param of params) {
     const{name,img}=param;
     console.log(name, img) 
     const div$$=document.createElement('div');
     const h4$$ = document.createElement('h4');
     const img$$ = document.createElement('img');
     img$$.classList.add('cart-photo');
     img$$.src=img
     divGallery$$.classList.add('gallery')
     div$$.classList.add('contain')
     h4$$.classList.add('cart-title')
     h4$$.innerText= name
     div$$.appendChild(h4$$);
     div$$.appendChild(img$$);
     divGallery$$.appendChild(div$$); 

    }
      
}



















