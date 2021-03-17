export default class Modal{
  constructor(botaoAbrir, botaoFechar, containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bindthis ao callback para
    // fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }

  //abre ou fecha
  toggleModal() {
    console.log(this)
    this.containerModal.classList.toggle('ativo');
  }
  //previne o padrao e adiciona evento
  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal()
  }
  //fecha o modal ao clicar fora (outro elemento)
  cliqueForaModal(event) {
    if(event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }
  addEvents(){
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }
  init(){
    if(this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEvents()
    }
    return this
  }
}

