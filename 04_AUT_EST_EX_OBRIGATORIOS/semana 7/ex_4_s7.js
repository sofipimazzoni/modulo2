const button = document.getElementById("button"); //chamei o botão

button.addEventListener("click", function(){ //função que calcula o preço de acordo com a qunatidade de passageiros e período

    //chamei a qunatidade de passageiros e o período inseridos pelo usuário
    let pass = document.getElementById("pessoas");
    let passageiros = parseInt(pass.value);
    let per = document.getElementById("periodo");
    let periodo = per.value;

    //calculo do preço caso o período seja diurno
    if(periodo == "diurno"){
        var p_total = passageiros * 200;
        if(passageiros > 50){
            var p_total = passageiros * 120;
        };
    };

    //calculo do preço caso o período seja noturno
    if(periodo == "noturno"){
        var p_total = passageiros * 100;
        if(passageiros > 50){
            var p_total = passageiros * 160;
        };
    };

    // na linha abaixo eu imprimo na tela as informações importantes (resposta)
    document.getElementById("resultado").innerHTML = "O total da compra é " + p_total + " sendo que serão " + passageiros + " passageiros no período " + periodo;
})
