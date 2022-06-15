const button = document.getElementById("button"); // chamei o botão

button.addEventListener("click", function(){ //essa função mostra ao usuário o número da sequência de Fibonacci que ele deseja saber de acordo com sua posição

    let posicao = document.getElementById("num").value; //peguei a posição que o usuário deseja
    let P = parseInt(posicao); 

    let lista = [1, 1] //lista com os valores iniciais da sequência
    let i = 0

    while (i <= P){ // esse while vai somar os dois valores da lista para formar um novo na sequência até ela chegar à posição que o usuário deseja saber
        var N_add = lista[i] + lista[i + 1]
        lista.push(N_add); 
        
        i++
    }

    document.getElementById("resultado").innerHTML = `O número referente a posição ${P} na sequência de Fibonacci é ${lista[P-1]}` //imprime o resultado na tela
})