import outsideClick from './outsideclick.js';

export default function initmenuButton(){
const menuList =document.querySelector('[data-menu="lista"]')
const menuButton = document.querySelector('[data-menu="button"]')


function abreMenu(event){
  menuList.classList.add("ativo")
  menuButton.classList.add("ativo")
  event.preventDefault();
    outsideClick(menuList, ['touchstart', 'click'], () => {
      menuList.classList.remove("ativo")
      menuButton.classList.remove("ativo")
    });
  }

if(menuButton){

    menuButton.addEventListener("click", abreMenu)
    menuButton.addEventListener("touchstart", abreMenu)
  }


}
