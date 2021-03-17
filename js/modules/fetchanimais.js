import initAnimaNumeros from './anima-numeros.js';
export default function initFetchAnimais(){
  async function fetchAnimais() {
    try{
    const animaisJson = await (await fetch('/animaisapi.json')).json()
    const sectionAnimais = document.querySelector(".numeros-grid")
    animaisJson.forEach(animal => {
      sectionAnimais.appendChild(criaElementoAnimal(animal))
    });
    initAnimaNumeros()
  }catch(erro){
    console.log(erro)
  }
  }
  
  function criaElementoAnimal(animal) {
    const divAnimal= document.createElement("div")
    divAnimal.classList.add("numeros-animal")
    divAnimal.innerHTML = `<h3>${animal.animal}s</h3> <span data-numero> ${animal.especimes}</span>`
    return divAnimal
  }
  fetchAnimais()
}


