window.addEventListener("load", addEventos)

function addEventos(){
// Criação dos botões
const decremento = document.querySelector("#decremento")
const incremento = document.querySelector('#incremento')
var containerNumber = document.querySelector('#containerNumber')
var contador = 0

// Execução da Função decrementar
function decrementar(){
  contador -- 
  if(contador < 0){
    containerNumber.innerHTML = contador
    containerNumber.style.color = "red"
    decremento.removeEventListener("click", decrementar)
  }else if(contador >= 0){
    containerNumber.innerHTML = contador
    containerNumber.style.color = "#fff"
  }
}

// Execução da Função incrementar
function incrementar(){
  contador ++ 
  if(contador >=0 && contador <= 10){
    containerNumber.innerHTML = contador
    containerNumber.style.color ="#fff"
  }if(contador < 0){
    containerNumber.innerHTML = contador
    containerNumber.style.color = "red"
  }
  decremento.addEventListener("click", decrementar)
}

// Chamada da função para decrementar
  decremento.addEventListener("click", decrementar)
// Chamada da função para incrementar
  incremento.addEventListener("click", incrementar)

}