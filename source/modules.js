const vitoria = document.querySelector('.vitoria')
const casas = document.querySelectorAll('.bloco')
const jogadaVez = document.querySelector('#vezJogador')
const placar = document.querySelector('#placar')
const empate = document.querySelector('.empate')

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

export function msgEmpate(condicao){ 	
  if(condicao == 'aparecer'){ 		
    empate.style.visibility = 'visible' 	
    empate.style.opacity = '100%' 
    } 	
  else if(condicao == 'sumir'){ 
    empate.style.visibility = 'hidden' 
    empate.style.opacity = '0%' 	
   } 
}

export function testeEmpate(linha){
  for(let i = 0; i < 9; i++){
    if(casas[i].textContent == ''){return}
  }
    if(testeVitoria(linha) == 'abaco'){return}
    msgEmpate('aparecer')
}

export function testeVitoria(linha) {
	for(let i = 0; i < 3; i++){
    const celula = linha[i].cells
    //condição vitória linha
    if(celula[0].children[0].index == celula[1].children[0].index && celula[1].children[0].index == celula[2].children[0].index){
        msgVitoria('aparecer')
        aumentarPonto(celula[0].children[0].index )
        return 'abaco'
      }
  //condição vitória coluna
    else if(linha[0].cells[i].children[0].index == linha[1].cells[i].children[0].index && linha[1].cells[i].children[0].index == linha[2].cells[i].children[0].index){
        msgVitoria('aparecer')
        aumentarPonto(linha[0].cells[i].children[0].index)
        return 'abaco'
      }
    //diagonal secundária  
    else if(linha[0].cells[0].children[0].index == linha[1].cells[1].children[0].index && linha[1].cells[1].children[0].index == linha[2].cells[2].children[0].index ){
      	msgVitoria('aparecer')
        aumentarPonto(linha[0].cells[0].children[0].index)
        return 'abaco'
      }
      //diagonal principal
     else if(linha[0].cells[2].children[0].index == linha[1].cells[1].children[0].index && linha[1].cells[1].children[0].index == linha[2].cells[0].children[0].index ){
      	msgVitoria('aparecer')
      	aumentarPonto(linha[0].cells[2].children[0].index)
      	return 'abaco'
      }
    }
}

export function resetTable(){ 	
	for(let i = 0; i < 9; i++){ 		
		casas[i].index = i 		
		casas[i].tipo = undefined     
		casas[i].innerText = '' 	
	} 
} 

export function resetAll(){
  resetTable()
  pontosX = 0
  pontosO = 0
  jogada = false
  atualizarPontuacao()
  exibirVez()
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

function atualizarPontuacao(){
  placar.innerText = ` X: ${pontosX}\n O: ${pontosO}`
}

function aumentarPonto(index){
  if(index == 'x'){
    pontosX++
  }
  else{
    pontosO++
  }
  atualizarPontuacao()
}