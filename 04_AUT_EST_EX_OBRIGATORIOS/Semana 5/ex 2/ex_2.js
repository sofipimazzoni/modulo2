// declarei as variáveis do valor das notas
var um = 1;
var dois = 2;
var cinco = 5;
var dez = 10;
var vinte = 20;
var cinquenta = 50;
var cem = 100;


//declarei as variáveis que vão armazenar a qunatidade de notas
var N_um = 0;
var N_dois = 0;
var N_cinco = 0;
var N_dez = 0;
var N_vinte = 0;
var N_cinquenta = 0;
var N_cem = 0;

//criei a constante do botão para que ele seja puxado do HTML
const button = document.getElementById("calc");

//aqui é a função que mostra o que vai acontecer quando o botão for clicado
button.addEventListener("click", function(){
    
    //aqui eu pego o valor que o usuário colocou no HTML
    let preco = document.getElementById("preço");
    let pf = parseInt(preco.value);
    
    //essa série de whiles é para identificar quantas e quais notas serão necessárias de acordo com o valor que o usuário colocou no HTML
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

    //várivael que declara a quantidade total de notas
    var somaGeral = N_um + N_dois + N_cinco + N_dez + N_vinte + N_cinquenta + N_cem;

    //pedi pra mostrar o resultado no HTML
    document.getElementById("resultado").innerHTML = "Você precisará de " + somaGeral + " notas, sendo elas: " + N_um + " notas de um, " + N_dois + " notas de dois, " + N_cinco + " notas de cinco, " + N_dez + " notas de dez, " + N_vinte + " notas de vinte, " + N_cinquenta + " notas de cinquenta, e " + N_cem + " notas de cem."
});