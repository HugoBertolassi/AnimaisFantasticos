
//aula 309 - criacao de tabmenu
function initTabNav(){
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

}


//aula310
function initAccordeon(){
    const accordionList=document.querySelectorAll( '.js-accordion dt');
    //console.log(accordionList)
    const activeClass='ativo'

    if(accordionList.length){
        accordionList[0].classList.add(activeClass)//primeiro item ja ir carregado
        accordionList[0].nextElementSibling.classList.add(activeClass)//primeiro item ja ir carregado

    }
    
    function activeAccordion(){
        // console.log(event.currentTarget);//colocar event no parametro da funcao
        // console.log(this)//funciona igual o de cima

        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item)=>{
        item.addEventListener('click',activeAccordion);
    })
}

initTabNav();//aula 309
initAccordeon();//aula 310
