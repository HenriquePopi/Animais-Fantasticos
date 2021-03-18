export default class Tooltip{
  constructor(tooltips){
  this.tooltips = document.querySelectorAll(tooltips);

  //bind dos objetos da classe aos callbacks
  this.onMouseLeave = this.onMouseLeave.bind(this)
  this.onMouseMove = this.onMouseMove.bind(this)
  this.onMouseOver = this.onMouseOver.bind(this)
  }
  
  //chama função q cria atooltip e adiciona os eventos de mouse move e mouse leave
  onMouseOver(event) {
    //cria tooltipbox e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }
  // deleta a tooltip do bidy e remove os eventos de mouse moove e mouseleave
  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove); 
  }
  
  //move a tooltip de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if(event.pageX + 240 > window.innerWidth){
      this.tooltipBox.style.left = `${ event.pageX - 200}px`;
    }else{
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  addEvent(){
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    })
  }
  init(){
    if(this.tooltips.length){
      this.addEvent()
    }
    return this
  }
}

