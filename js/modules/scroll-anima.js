import debounce from './debounce.js';
export default class ScrollAnima{
  constructor(sections){
  this.sections = document.querySelectorAll(sections);
  this.windowMetade = window.innerHeight * 0.6;

  this.checkDisatance = debounce(this.checkDisatance.bind(this),50)
  }
  // cria um array de objetos contendo contendo um elemento do window e sua distancia do topo
  getDistance(){
    this.distance = [...this.sections].map(section =>{// desestrutura uma nodelist para  ser usada como array
      const offset = section.offsetTop; // retorna a distancia de um item do top
      return{
        element: section,
        offset: offset - this.windowMetade //salvando a distancia do top m,enos metade do tamanho da tela
      };
      
    })
  }
  //verifica se algum elemento se encontra na metade da tela em relaçao ao scroll
  // caso positivo inicia a animação para q seja animado caso negativo, desfaz a animação
  checkDisatance(){
    this.distance.forEach(section =>{
      if(window.pageYOffset> section.offset) section.element.classList.add('ativo'); //inicia animacao
        
      else if(section.element.classList.contains('ativo')) section.element.classList.remove('ativo');//retira animacao
    })
  }
  //inicia animaçaõ
  init(){
    if(this.sections.length) {
      this.getDistance()
      this.checkDisatance()
      window.addEventListener('scroll', this.checkDisatance);
    }
    return this
  } 

  //remove o event listener da animação
  stop(){
    window.removeEventListener('scroll', this.checkDisatance);
  }
}