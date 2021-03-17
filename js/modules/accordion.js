export default class Accordion{
  constructor(accordionList, activeClass ){
    this.accordionList = document.querySelectorAll(accordionList);
    this.activeClass = activeClass ;
  }
  // ativa o item clicado e desativa o restante (toggle)
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }
  //adiciona os eventos ao acordion
  addAcordionEvent(){
    this.accordionList.forEach((item) => {
      item.addEventListener('click',() => this.toggleAccordion(item));
    });

  }
  //iniciar funcao
  init(){
    if(this.accordionList.length) {
      //ativar primeiro item
      this.toggleAccordion(this.accordionList[0])
      this.addAcordionEvent()
    }
      
    return this
  }

  
}