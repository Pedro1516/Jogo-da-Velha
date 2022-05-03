import {marcarTabuleiro, resetAll, msgVitoria, testeVitoria} from './modules.js'

const casas = document.querySelectorAll('.bloco')
const linha = document.querySelectorAll('tr')
const table = document.querySelector('.tabuleiro')
const vitoria = document.querySelector('.vitoria')

casas.forEach((el, j) => {
	marcarTabuleiro(el, j)
})

table.addEventListener('click', e => {
      testeVitoria(linha)
 })

vitoria.addEventListener('click', () => {
	msgVitoria('sumir')
	resetAll()
})
