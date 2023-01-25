// Retorne no console todas as imagens do site
const imgs=document.querySelectorAll('img')
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgs2=document.querySelectorAll('img[src^="img/ima"]')
console.log(imgs2);

// Selecione todos os links internos (onde o href começa com #)
const linkCSS = document.querySelectorAll('[href^="#"]');
console.log(linkCSS);

// Selecione o primeiro h2 dentro de .animais-descricao
const linkH2 = document.querySelector('.animais-descricao h2');
console.log(linkH2.textContent);

// Selecione o último p do site
const lastP= document.querySelectorAll('p');
const t=lastP[lastP.length-1];
console.log(lastP[lastP.length-1].textContent);


// Como corrigir os erros abaixo:
const imgs_ex2 = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs_ex2.forEach( ()=> {
  console.log(i++);
});

imgs_ex2.forEach(() => i++);