const button = document.getElementById("button"); // chamei o botão

button.addEventListener("click", function () { // essa função pega o valor dado pelo usuário e soma os dígitos do mesmo
    
    let lista = []; // criei uma lista para armazenar o input 
    let N = document.getElementById("num").value; // chamei o valor que o usúario colocou
    var soma = 0 

    if (N < 0) { // esse if é só de chegagem caso a pessoa tenha colocado um número negativo
        alert("Você digitou um número inválido, tente novamente");
    }

    else {
        for (let i = 0; i < N.length; i++) { // esse for transforma o número em um inteiro e o coloca dentro de uma lista
            lista.push(parseInt(N[i]));
            soma += parseInt(N[i]);
        }

        document.getElementById("resultado").innerHTML = `A soma dos dígitos do seu número é ${soma}.` // imprime o resultado final na tela
    }
})