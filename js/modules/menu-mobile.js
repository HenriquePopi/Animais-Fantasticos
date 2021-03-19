import outsideClick from './outsideclick.js';

export default class MenuButton{
constructor(menuList, menuButton,events){
  this.menuList =document.querySelector(menuList)
  this.menuButton = document.querySelector(menuButton)
  this.abreMenu = this.abreMenu.bind(this)
  //setta valores de events
  if(event === undefined) this.events = ['touchstart', 'click']
  else this.events = events
}

abreMenu(event){
  this.menuList.classList.add("ativo")
  this.menuButton.classList.add("ativo")
  event.preventDefault();
    outsideClick(this.menuList,this.events, () => {
      this.menuList.classList.remove("ativo")
      this.menuButton.classList.remove("ativo")
    });
  }
  addEvents(){
    this.events.forEach(element =>this.menuButton.addEventListener(element, this.abreMenu));
  }
  init(){
    if(this.menuButton && this.menuList){
      this.addEvents()
    }
    return this
  }


}
