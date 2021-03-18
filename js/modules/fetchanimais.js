import AnimaNumeros from './anima-numeros.js';



export default function fetchAnimais(url, target){
  // cria a div de cada animal q sera inserida no body
  function criaElementoAnimal(animal) {
    const divAnimal= document.createElement("div")
    divAnimal.classList.add("numeros-animal")
    divAnimal.innerHTML = `<h3>${animal.animal}s</h3> <span data-numero> ${animal.especimes}</span>`
    return divAnimal
  }
  function animaAnimaisNumeros(){
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', "ativo")
    animaNumeros.init()
  }

// faz o fech do json e pega as informações de cada animal
  async function criarAnimais() {
    try{
    // fetch espera a resposta e transforma em json
    const animaisJson = await (await fetch(url)).json()
    const sectionAnimais = document.querySelector(target)
    
    
    //apos a transformacao em jsonchama a função que cria a div passando como parametro cada objeto do json
    animaisJson.forEach(animal => sectionAnimais.appendChild(criaElementoAnimal(animal)));
    //apos a criacao das divs anima os numeors
    animaAnimaisNumeros()

  }catch(erro){
    console.log(erro)
  }
  }
  return criarAnimais()
  
 
}


