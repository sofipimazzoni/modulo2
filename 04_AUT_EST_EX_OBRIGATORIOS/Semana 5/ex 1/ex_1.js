// prof, o meu não ta dando certo, eu tentei de várias formas concertar mas não consegui, então vou colocar aqui pra você o que eu pensei

// criei uma função para calcular todas as operações com três parâmentros que o usuário vai colocar no HTML

const button = document.getElementById("resul");

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

    document.getElementById("resultado").innerHTML = resultado;

})

/*function Calcular(valor1, valor2, operador){



//criei essa função para poder mostar o resultado na página
function resultado(){
    Calcular(valor1, valor2, operador); //chamei a função calcular
    document.getElementById("resultado").innerHTML = valor1 + operador + valor2 + "=" + resultado(); //pedi pra ele imprimir isso na tela
}

PROBLEMAS: ele não ta imprimindo e fala que não acha a variável "operador", mas eu não sei porque, uma vez que eu declarei ela*/