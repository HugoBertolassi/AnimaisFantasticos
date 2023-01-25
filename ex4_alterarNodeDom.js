// Duplique o menu e adicione ele em copy
const menu=document.querySelector(".menu")
const copy=document.querySelector(".copy")

const newMenu=menu.cloneNode(true);

copy.appendChild(newMenu)


// Selecione o primeiro DT da dl de Faq

const faq=document.querySelector(".faq dl")
const dt=faq.firstElementChild//retorma o elemento
const dtNode=faq.firstChild



// Selecione o DD referente ao primeiro DT
const DD =  dt.nextElementSibling
// Substitua o conteúdo html de .faq pelo de .animais

const animais =document.querySelector(".animais")

faq.innerHTML=animais.innerHTML
