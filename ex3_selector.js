// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links= document.querySelectorAll('a[href^="#"]');

function handleImgClick(event){
    event.preventDefault()
    //console.log(event.target);
    links.forEach(item=>{
        item.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
    console.log(event.target.classList);
}
links.forEach((link) => {
    link.addEventListener('click',handleImgClick)
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
elementos=document.querySelectorAll('body *');

function  handleElementClick(event){
    console.log(event.currentTarget)
}

elementos.forEach(elemento=>{
    elemento.addEventListener('click',handleElementClick)
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function  handleElementClickRemove(event){
   event.currentTarget.remove()
}

elementos.forEach(elemento=>{
    elemento.addEventListener('click',handleElementClickRemove)
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleKeybordT(event){
    if(event.key ==='t'){
        document.documentElement.classList.toggle('textoMaior')//interage com o html e adiciona a classe
    }
}

window.addEventListener('keydown',handleKeybordT)