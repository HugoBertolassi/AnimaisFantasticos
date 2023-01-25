
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

//aula 311

function initScrollSuave(){
    const linksInternos=document.querySelectorAll('.js-menu a[href^="#"]')//a[href^="#"] Valida se eh link interno
    //console.log(linksInternos)

    function scrollToSection(event){
        event.preventDefault();//desabilita o comportamento padrao de funcionamento do link
        //const href=event.currentTarget;//ele pega o elemento e queremos o valor
        const href=event.currentTarget.getAttribute('href');//ele pega o elemento e queremos o valor
        //console.log(href)

        const section = document.querySelector(href);
        //console.log(href,section)
        
        section.scrollIntoView({
            behavior:"smooth",
            block:"start",
        });

        //Forma alternativa de scrool suave
        // const topo = section.offsetTop
        // window.scrollTo({
        //     top: topo,
        //     behavior:"smooth"
        // })
    }

    linksInternos.forEach((link)=>{
        link.addEventListener('click',scrollToSection)
    });
}

//aula12-funcao de animacao do scroll
function initAnimacaoScroll(){
    const sections=document.querySelectorAll(".js-scroll")
    console.log(sections)
    if(sections.length){
        const windowMetade  =   window.innerHeight * 0.8;
        
        function animaScroll(){
            sections.forEach((section)=>{
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible= (sectionTop - windowMetade)<0 ;

                if(isSectionVisible){
                    section.classList.add('ativo');
                }
                else{//desativa animacao
                    section.classList.remove('ativo');
                }
            });
        }
    }
    animaScroll();//Inicaliza para aparecer o primeiro conteudo sem depender do scroll da tela
    window.addEventListener('scroll',animaScroll);
}

initTabNav();//aula 309
initAccordeon();//aula 310
initScrollSuave();//aula 311
initAnimacaoScroll();//aula 312