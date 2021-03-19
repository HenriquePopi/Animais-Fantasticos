export default class Funcionamento{
  constructor(funcionamento){
    this.funcionamento = document.querySelector(funcionamento)
    
    this.agora = new Date()
  }
  horarioFuncionamento(){
    this.diasSeman = this.funcionamento.dataset.semana.split(',').map(Number)
    this.horario = this.funcionamento.dataset.horario.split(',').map(Number)
  }
  dataAgora(){
    this.data = new Date()
    this.diaAgora = this.data.getDay()
    this.horaAgora = this.data.getUTCHours() - 3
  }
  
  estaAberto(){
    return (this.diasSeman.includes(this.diaAgora) &&  this.horaAgora >= this.horario[0] && this.horaAgora < this.horario[1])
  }
  init(){
    this.horarioFuncionamento()
    this.dataAgora()
    if(this.estaAberto)this.funcionamento.classList.add("aberto") 
    
  }

}

  

