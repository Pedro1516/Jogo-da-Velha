const vitoria = document.querySelector('.vitoria')
const casas = document.querySelectorAll('.bloco')

var jogada = false

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

      if(celula[0].children[0].index == celula[1].children[0].index && celula[1].children[0].index == celula[2].children[0].index){
        msgVitoria('aparecer')
      }

      if(linha[0].cells[i].children[0].index == linha[1].cells[i].children[0].index && linha[1].cells[i].children[0].index == linha[2].cells[i].children[0].index){
        msgVitoria('aparecer')
      }
      
     if(linha[0].cells[0].children[0].index == linha[1].cells[1].children[0].index && linha[1].cells[1].children[0].index == linha[2].cells[2].children[0].index ){
      	msgVitoria('aparecer')
      }
      
      if(linha[0].cells[2].children[0].index == linha[1].cells[1].children[0].index && linha[1].cells[1].children[0].index == linha[2].cells[0].children[0].index ){
      	msgVitoria('aparecer')
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