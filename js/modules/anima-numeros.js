export default class initAnimaNumeros{
  constructor(numeros, observerTarget, observerClass){
  this.numeros = document.querySelectorAll(numeros)
  this.observerClass = observerClass
  this.observerTarget = document.querySelector(observerTarget)
  this.handdleMutation = this.handdleMutation.bind(this)
  }
  //recebe um elementoo do dom com um numero em texto
  //converte em inteiro e faz uma contagem de 0 ate o numero
  //incrementando no dom para dar um efeito visual
  static incrementarNumero(numero){
  // static adicionado pois o metodo nao acessa nenhum elemento da classe diretamente
  // assim o metodo fica no constructor e nao podera ser chamado pelos objetos da classe 
    const numeroTexto = parseInt(numero.innerText)
      let start =0
      let incremento = Math.floor(numeroTexto/100)
      let intervalo = setInterval(()=>{
       start += incremento
       numero.innerText = start
       if(numeroTexto < start ){
         clearInterval(intervalo)
         numero.innerText = numeroTexto
       }
      },25 * Math.random())
  }
  // ativa incrementar numero para cada numero da nodelist de numeros selecionados do dom
  animaNumeros(){
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero))
  }
  //fubção que a mutação chama
  handdleMutation(mutation){
    if(mutation[0].target.classList.contains(this.observerClass)){
      this.observer.disconnect()
      this.animaNumeros()
    }
  }
  // adiciona mutation observer para verificar quando a classe ativo é adicionada ao elemento target
  addMutationObserver(){
    this.observer = new MutationObserver(this.handdleMutation)
    this.observer.observe(this.observerTarget,{attributes: true})
  }
  
  init(){
    if(this.numeros.length && this.observerTarget){
      this.addMutationObserver()
    }
  }
  
}
