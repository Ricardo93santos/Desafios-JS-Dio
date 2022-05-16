window.addEventListener("load", addEventos)

function addEventos(){

  const btn_submit = document.querySelector("#btn_submit")
  const arrayItem = []
  btn_submit.addEventListener("click", adicionarItem)


  function adicionarItem(){
    let text_input = document.querySelector("#text_input").value
    let list_item = document.querySelector("#list_item")
    list_item.innerHTML= text_input  
  }
}