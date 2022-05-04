const vitoria = document.querySelector('.vitoria')
const casas = document.querySelectorAll('.bloco')
const jogadaVez = document.querySelector('#vezJogador')
const placar = document.querySelector('#placar')

var jogada = false
var pontosX = 0
var pontosO = 0

export function marcarTabuleiro(el, i){
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
}

export function testeVitoria(linha) {
	for(let i = 0; i < 3; i++){
    const celula = linha[i].cells
    //condição vitória linha
    if(celula[0].children[0].index == celula[1].children[0].index && celula[1].children[0].index == celula[2].children[0].index){
        msgVitoria('aparecer')
        aumentarPonto(celula[0].children[0].index )
        break
      }
  //condição vitória coluna
    if(linha[0].cells[i].children[0].index == linha[1].cells[i].children[0].index && linha[1].cells[i].children[0].index == linha[2].cells[i].children[0].index){
        msgVitoria('aparecer')
        aumentarPonto(linha[0].cells[i].children[0].index)
        break
      }
    //diagonal secundária  
    if(linha[0].cells[0].children[0].index == linha[1].cells[1].children[0].index && linha[1].cells[1].children[0].index == linha[2].cells[2].children[0].index ){
      	msgVitoria('aparecer')
        aumentarPonto(linha[0].cells[0].children[0].index)
        break
      }
      //diagonal principal
      if(linha[0].cells[2].children[0].index == linha[1].cells[1].children[0].index && linha[1].cells[1].children[0].index == linha[2].cells[0].children[0].index ){
      	msgVitoria('aparecer')
      	aumentarPonto(linha[0].cells[2].children[0].index)
      	break
      }
    }
}

export function msgVitoria(condicao){
	if(condicao == 'aparecer'){
		vitoria.style.visibility = 'visible'
		vitoria.style.opacity = '100%'
	}
	else if(condicao == 'sumir'){
		vitoria.style.visibility = 'hidden'
		vitoria.style.opacity = '0%'
	}
}

export function resetAll(){ 	
	for(let i = 0; i < 9; i++){ 		
		casas[i].index = i 		
		casas[i].tipo = undefined     
		casas[i].innerText = '' 	
	} 
} 

export function exibirVez(){
  if(jogada){
    vezJogador.innerText = 'Vez de O'
  }
  else if(!jogada){
    vezJogador.innerText = 'Vez de X'
  }
  else{
    console.log('Algo de estanho aconteceu')
  }
}

function aumentarPonto(index){
  if(index == 'x'){
    pontosX++
  }
  else{
    pontosO++
  }
  
  placar.innerText = ` X: ${pontosX}\n O: ${pontosO}`
}