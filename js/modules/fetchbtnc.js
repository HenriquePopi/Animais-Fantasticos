
export default function initFetchBtnc(){
  async function buscaBtC(){
    try{
      let BRL = await (await fetch(`https://blockchain.info/ticker`)).json()
      BRL = BRL.BRL
      document.querySelector('[data-bitcoins]').innerHTML = `Doe: <span>${(100 / BRL.last).toFixed(5)}</span> Btcoins `
    }catch(erro){ 
      console.log(erro)}
  }
  buscaBtC()
  setInterval(buscaBtC, 1000 * 30);

}