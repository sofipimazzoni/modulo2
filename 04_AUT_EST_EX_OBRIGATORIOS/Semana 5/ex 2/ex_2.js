// declarei as variáveis do valor das notas

var um = 1;
var dois = 2;
var cinco = 5;
var dez = 10;
var vinte = 20;
var cinquenta = 50;
var cem = 100;



var N_um = 0;
var N_dois = 0;
var N_cinco = 0;
var N_dez = 0;
var N_vinte = 0;
var N_cinquenta = 0;
var N_cem = 0;

const button = document.getElementById("calc");

button.addEventListener("click", function(){
    
    let preco = document.getElementById("preço");
    let pf = parseInt(preco.value);
    
    while(pf >= cem){
        pf = pf - 100;
        N_cem++;
    };

    while(pf >= cinquenta){
        pf = pf - 50;
        N_cinquenta++;
    };

    while(pf >= vinte){
        pf = pf - 20;
        N_vinte++;
    };

    while(pf >= dez){
        pf = pf - 10;
        N_dez++;
    };

    while(pf >= cinco){
        pf = pf - 5;
        N_cinco++;
    };

    while(pf >= dois){
        pf = pf - 2;
        N_dois++;
    };

    while(pf >= um){
        pf = pf - 1;
        N_um++;
    };

    var somaGeral = N_um + N_dois + N_cinco + N_dez + N_vinte + N_cinquenta + N_cem;
    document.getElementById("resultado").innerHTML = "Você precisará de " + somaGeral + " notas, sendo elas: " + N_um + " notas de um, " + N_dois + " notas de dois, " + N_cinco + " notas de cinco, " + N_dez + " notas de dez, " + N_vinte + " notas de vinte, " + N_cinquenta + " notas de cinquenta, e " + N_cem + " notas de cem."
});