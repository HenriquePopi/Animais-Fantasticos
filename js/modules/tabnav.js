export default class TabNav {
  constructor( tabMenu, tabContent){
  this.tabMenu = document.querySelectorAll(tabMenu);
  this.tabContent = document.querySelectorAll(tabContent);
  this.activeClass = "ativo"
  }
  //ativa a seção de referente ao index
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }
  //adiciona os eventos as events
  addEvent(){
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });

  }
  init(){
    if(this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0)
      this.addEvent()
    }
    return this
  }
  
  

}