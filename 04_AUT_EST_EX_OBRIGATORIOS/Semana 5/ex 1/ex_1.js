//criei a constante do botão para que ele seja puxado do HTML

const button = document.getElementById("resul");

//aqui é a função que mostra o que vai acontecer quando o botão for clicado
button.addEventListener("click", function(){

    // peguei os valores que o usuário colocou
    let valor1 = document.getElementById("valor1");
    let v1 = parseFloat(valor1.value);

    let valor2 = document.getElementById("valor2");
    let v2 = parseFloat(valor2.value);

    let operador = document.getElementById("opr");
    let opr = operador.value;

    //fiz as operações de acordo com o que o usuário escolheu
    if (opr == "+"){ 
        resultado = v1 + v2;
    };

    if (opr == "-"){ 
        resultado = v1 - v2;
    };

    if (opr == "*"){ 
        resultado = v1 * v2;
    };

    if (opr == "/"){ 
        resultado = v1 / v2;
    };

    // prof, não consegui esse do // porque ele transforma em um comentário e não consegui achar o equivalente dele para o JS

    //if (opr == "//"){ 
    //    resultado = valor1 ? valor2;
    //};

    if (opr == "%"){ 
        resultado = v1 % v2;
    };

    //pedi pra mostrar o resultado no HTML
    document.getElementById("resultado").innerHTML = resultado;

})
