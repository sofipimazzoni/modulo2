
// chamei o botão
const button = document.getElementById("trocar")

button.addEventListener("click", function(){ //função par trocar os valores

    //chamei os valores que o usuário colocou
    let v1 = document.getElementById("valor1").value;
    let v2 = document.getElementById("valor2").value;

    var vaux = v1 //guardei a primeira variável

    //troquei os valores no próprio input
    document.getElementById("valor1").value = v2
    document.getElementById("valor2").value = vaux

})