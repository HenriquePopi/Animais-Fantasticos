export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]')
  const diasSeman = funcionamento.dataset.semana.split(',').map(Number)
  const horario = funcionamento.dataset.horario.split(',').map(Number)
  const agora = new Date()
    if(diasSeman.includes(agora.getDay()) && agora.getHours()>= horario[0] && agora.getHours()< horario[1] ){
      funcionamento.classList.add("aberto") 
    } 


}

  

