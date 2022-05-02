const casas = document.querySelectorAll('.bloco')
const linha = document.querySelectorAll('tr')
const table = document.querySelector('.tabuleiro')


var jogada = false;

casas.forEach((el, i) => {
  el.index = i
  el.addEventListener("click", () => {
    el.selecionado = true
    if(jogada == false){
      if(el.tipo == undefined){
       el.tipo = 'X'
       el.textContent = 'X'
       el.index = 'x'
       jogada = true
      }
    }
   else{
    if(el.tipo == undefined){
     el.tipo = 'O'
     el.textContent = 'O'
     el.index = 'o'
     jogada = false
   }
    }
  })
})

table.addEventListener('click', e => {
  for(i = 0; i < 3; i++){
      const celula = linha[i].cells

      if(celula[0].children[0].index == celula[1].children[0].index && celula[1].children[0].index == celula[2].children[0].index){
        location.reload()
      }

      if(linha[0].cells[i].children[0].index == linha[1].cells[i].children[0].index && linha[1].cells[i].children[0].index == linha[2].cells[i].children[0].index){
        location.reload()
      }
    }
    //console.log(` linha: ${i}\n estado: ${won}\n padrao: ${padrao}`)

})
