/* Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista. */


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
  
  for (const country of countries) {
    const li$$ = document.createElement('li')
    const div$$ = document.createElement('div');
    const h4$$ = document.createElement('h4');
    const img$$ = document.createElement('img');
    h4$$.innerText=country.title;
    img$$.src= country.imgUrl;
    div$$.appendChild(h4$$)
    div$$.appendChild(img$$);
    li$$.appendChild(div$$);
    ul$$.appendChild(li$$); 
  }
  
  document.body.appendChild(ul$$)

  

  btnDelete$$.addEventListener('click', delLastItem)


  function delLastItem(){
    ul$$.lastChild.remove()
  }