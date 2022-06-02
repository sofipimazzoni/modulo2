
// nas duas linhas abaixo eu chamo os botões de mais e menos
const buttonMenos = document.getElementById("b_menos");
const buttonMais = document.getElementById("b_mais");

// aqui eu criei uma função que vai dizer o que o botão de menos vai fazer
buttonMenos.addEventListener("click", function(){
    let v = document.getElementById("qnt_p").value
    v = parseInt(v) - 1
    document.getElementById("qnt_p").value = v
} );


// aqui eu criei uma função que vai dizer o que o botão de mais vai fazer
buttonMais.addEventListener("click", function(){
    let v = document.getElementById("qnt_p").value
    v = parseInt(v) + 1
    document.getElementById("qnt_p").value = v

} );