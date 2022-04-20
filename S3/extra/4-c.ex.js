/* # Español
Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html. */

const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  const ul$$ = document.createElement('ul'); 
  const btnDelete$$ = document.createElement('button');
  btnDelete$$.innerText = 'Delete Last item'
  btnDelete$$.classList.add('btn-delete');
  document.body.appendChild(btnDelete$$);  
  let count = 0
  for (const country of countries) {
    let toDelete = 'to-delete_'+count;
    const li$$ = document.createElement('li')
    li$$.classList.add(toDelete);
    const div$$ = document.createElement('div');
    const h4$$ = document.createElement('h4');
    const img$$ = document.createElement('img');
    const btnFoto$$ = document.createElement('button');
    btnFoto$$.classList.add(toDelete);
    btnFoto$$.innerText='Eliminar foto';
    h4$$.innerText=country.title;
    img$$.src= country.imgUrl;
    div$$.appendChild(h4$$)
    div$$.appendChild(img$$);
    div$$.appendChild(btnFoto$$);
    li$$.appendChild(div$$);
    ul$$.appendChild(li$$); 
    count ++
    btnFoto$$.addEventListener('click',deleteItem)
  }
  
  document.body.appendChild(ul$$)

  

  btnDelete$$.addEventListener('click', delLastItem)
  

  function delLastItem(){
    ul$$.lastChild.remove()

}

function deleteItem(event){
   // console.log('soy ',event.path[2].classList.value)
    const itemToDelete = '.'+(event.path[2].classList.value);
    console.log(itemToDelete)
    const liToDel$$ = document.querySelector(itemToDelete)
    liToDel$$.remove();

}
