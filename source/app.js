import {marcarTabuleiro, resetTable, resetAll, msgVitoria, msgEmpate, testeVitoria, exibirVez, testeEmpate} from './modules.js'

const casas = document.querySelectorAll('.bloco')
const linha = document.querySelectorAll('tr')
const table = document.querySelector('.tabuleiro')
const vitoria = document.querySelector('.vitoria')
const empate = document.querySelector('.empate')
const reiniciar = document.querySelector('#reiniciar')

casas.forEach((el, j) => {
	marcarTabuleiro(el, j)
})

table.addEventListener('click', e => {
      testeVitoria(linha)
      testeEmpate(linha)
      exibirVez()
 })

vitoria.addEventListener('click', () => {
	msgVitoria('sumir')
	resetTable()
})

empate.addEventListener("click", () => {
  msgEmpate('sumir')
  resetTable()
})

document.addEventListener("keydown", e => {
  if(e.keycode == 32){
    resetTable()
  }
  
})

reiniciar.addEventListener("click", () => {
  resetAll()
  reiniciar.style.width = '110px'
  setTimeout(() => reiniciar.style.width = '70%', 1000);
})