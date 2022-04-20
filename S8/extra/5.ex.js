const url = 'https://opentdb.com/api.php?amount=10&type=multiple';

const gameBoard$$ = document.querySelector('[data-function = "gameboard"]')
const respuestas = []

fetch(url)
 .then(res => res.json()).then (res => printQuestions(res))


 function printQuestions(params){
    
    for (const param of params.results) {
   //  console.log (param)   
     const div$$ = document.createElement('div');
     const h4$$ = document.createElement('h4');
        
     h4$$.innerText = param.question;
     div$$.appendChild(h4$$);
     div$$.appendChild(h4$$);     
     gameBoard$$.appendChild(div$$);  

     let allanswers = [... param.incorrect_answers, param.correct_answer]
     allanswers = allanswers.sort(function(){return Math.random()-0.5})
     for (const answer of allanswers) {   
         const pp$$= document.createElement('p');
         pp$$.classList.add('answer')
         pp$$.innerHTML=answer;
         div$$.appendChild(pp$$);
         const elementos =[];
         elementos.push(pp$$);
         pp$$.addEventListener('click', ()=>comprubaResultado(elementos,pp$$,pp$$.textContent,param.correct_answer));
          
     } 
    }    
 }
 
 
 const comprubaResultado = (elemento,elementos,contenido,resultado)=>{
     elemento.classList.add('marked')
     console.log(elementos)
 }