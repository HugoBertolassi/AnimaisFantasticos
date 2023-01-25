// Verifique a distância da primeira imagem
// em relação ao topo da página
const img=document.querySelector('img').offsetTop;
console.log(img)
// Retorne a soma da largura de todas as imagens
function somaImagens(){
    let widthImgs=0;
    const imgs=document.querySelectorAll('img')

    imgs.forEach((valor,index)=>{
        widthImgs+=imgs[index].width;
        console.log(`Todas as imagens:`,widthImgs,index)
    })
}

window.onload=function(){//essa funcao funciona para dar tempode carregar as imagens
    somaImagens()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const tamanhoLink=document.querySelectorAll('a')

tamanhoLink.forEach((img,index)=>{
    if(tamanhoLink[index].offsetWidth<48){
        console.log(`A lsrgura do link eh menor que 48px`,tamanhoLink[index].innerText)
    }
    if(tamanhoLink[index].offsetHeight<48){
        console.log(`A altura do link eh menor que 48px`,tamanhoLink[index].innerText)
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const classeMenu=document.querySelector('.menu')
if(window.matchMedia('(max-width:720px)').matches){
    classeMenu.classList.add('menu-mobile');
}
else{
    classeMenu.classList.remove('menu-mobile');
}