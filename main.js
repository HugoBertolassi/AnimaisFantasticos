//aula 309 - criacao de tabmenu
const tabMenu=document.querySelectorAll('.js-tabmenu li')
const tabContent=document.querySelectorAll('.js-tabcontent section')

if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo')
}


//manipulacao de classe conforme click
function activeTab(index){
    tabContent.forEach((section,index)=>{
        section.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo');
}

//Adicao de eventos
tabMenu.forEach((itemMenu,index)=>{
    
    itemMenu.addEventListener('click',function(){
        activeTab(index);//Eh indicado criar dessa forma porque colocar diretamente a fucao com o index pode dar problema

    })
});