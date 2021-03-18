import outsideClick from './outsideclick.js';

export default class initDropdownMenu{
  constructor(dropdownMenus, events){
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    //define os eventos caso nao sejam passados na criação do objeto
    if(events === undefined) this.events =  ['touchstart', 'click']
    else this.events = events

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  //adiciona o aevento de dropdown aos elementos
  addEvent(){
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  //ativa o dropdown menu e adiciona a função que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add('active');
    outsideClick( element,this.events, () => {
      element.classList.remove('active');
    });
  }
  init(){
    if(this.dropdownMenus.length){
      this.addEvent()
    }
    return this
  }
}