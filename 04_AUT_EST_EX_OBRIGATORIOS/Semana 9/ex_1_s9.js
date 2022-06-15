const button = document.getElementById("button"); // chamei o botão 

button.addEventListener("click", function(){ // função que checa a veracidade do número e diz se sua centena é ímpar ou par
    
    lista = []
    let centena = document.getElementById("000").value;

    
    if (centena.length > 3 || centena.length < 3){ // chega veracidade
        alert("Você digitou um número inválido, tente novamente")
    }

    else{
        for (let i = 0; i < centena.length; i++) { // esse for transforma o número em um inteiro e o coloca dentro de uma lista
            lista.push(parseInt(centena[i]));
        }

        if (centena[0] % 2 == 0){ // aqui ele pega apenas o primeiro número (centena) e checa se ele é par
            document.getElementById("resultado").innerHTML = "O seu número é par!"
        }

        else if (centena[0] % 2 != 0){ // aqui ele pega apenas o primeiro número (centena) e checa se ele é ímpar
            document.getElementById("resultado").innerHTML = "O seu número é ímpar!"
        }
    }
})