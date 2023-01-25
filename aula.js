/*Aula pegar elemento*/


const animais=document.getElementById('animais')
console.log(animais)

//pega pela classe todos e retorna um HTML Colection
const gridSection=document.getElementsByClassName('grid-section')

//retorna o primeiro elemento que tem a tag
const contato=document.querySelector('.animais');
const primeiroUl=document.querySelector('ul');
const navItem=primeiroUl.querySelector('li');//retorna o primeiro li do ul selcionado

//pega todos os que tem a informação é retorna uma NodeList, essa lista não atualiza em tempo real
const animaisImg=document.querySelectorAll('.animais img');//retoa todas as img ques estão contidos na classe animal
console.log(animaisImg)

//transforma qualquer array like(nodelist ou html collection) em array e habilita a modificação deles
const gridSectionHtml=document.getElementsByClassName('grid-section')
const arrayGrid=Array.from(gridSectionHtml)
arrayGrid.forEach(function(item,index,array){
    console.log(item)

})


//////////////////////////////
//pegar distancia 
const listaAnimais =document.querySelector('.animais-lista');

console.log(listaAnimais.clientHeight)//heigth+paddinf
console.log(listaAnimais.offsetHeight)//height+padding+border
console.log(listaAnimais.scrollHeight)//height total, mesmo dentro de um scroll
console.log(listaAnimais.offsetTop)//distancia do elemento ate o topo da pagina
console.log(listaAnimais.offsetleft)//distancia do elemento ate o topo da pagina
console.log(listaAnimais.getBoundingClientRect())

const small=window.matchMedia('(max-width:600px)').matches
console.log(window.innerWidth)
if(small){
    console.log(`Usuario Mobile`)
}
else{
    console.log(`Usuario pc`)
}

/////////////////307
function handleKeyboard(event){
    if(event.key === 'a'){
        document.body.classList.toggle('azul')
    }
}


window.addEventListener('keydown',handleKeyboard);

const imgs  =   document.querySelectorAll('img');

function handleImg(event){
    console.log(event.currentTarget.getAttribute('src'))
}

imgs.forEach((img)=>{
    // console.log(img)
    img.addEventListener('click',handleImg)
});
