/* Basandote en el siguiente array crea una lista ul > li con los textos del array. */


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$=document.createElement('ul');

for (i=0 ;i<=apps.length;i++){
    const li$$=document.createElement('li')
    li$$.innerHTML=apps[i];
    ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);