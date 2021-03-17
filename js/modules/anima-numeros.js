// export default function initAnimaNumeros(){
  

//   async function animaNumeros(){
//     const dataNumero = document.querySelectorAll('[data-numero] ')
//     const animais = await (await fetch('/animaisapi.json')).json()
//     for (let index = 0; index < dataNumero.length; index++) {
//       const campoNumerico = dataNumero[index];
//       const numeroTexto = animais[index]["especimes"]
//       let start =0
//       let incremento = Math.floor(numeroTexto/100)
//       let intervalo = setInterval(()=>{
//           start += incremento
//           campoNumerico.innerText = start
//           if(numeroTexto < start ){
//             clearInterval(intervalo)
//             campoNumerico.innerText = numeroTexto
//           }
//         },25 * Math.random())
      
//     }

//   }
    
//     function handdleMutation(mutation){
//       if(mutation[0].target.classList.contains('ativo')){
//       observer.disconnect()
//       animaNumeros()
//       }
    
//     }
    
//   const observer = new MutationObserver(handdleMutation)
//   observer.observe(document.querySelector('.numeros'),{attributes: true})
// }



















export default function initAnimaNumeros(){
  const numeros = document.querySelectorAll('[data-numero] ')

  function animaNumeros(){
    numeros.forEach((numero) =>{
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
     })
  }
  
  function handdleMutation(mutation){
    if(mutation[0].target.classList.contains('ativo')){
      observer.disconnect()
      animaNumeros()
    }
  
  }
  
  const observer = new MutationObserver(handdleMutation)
  observer.observe(document.querySelector('.numeros'),{attributes: true})
}
