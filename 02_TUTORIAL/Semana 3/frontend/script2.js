
/* função do exercício que a prof passou na sala */
function calcular(){
    const valor_1 = Number(document.getElementById('valor1').value);
    const valor_2 = Number(document.getElementById('valor2').value);
    const resultado = valor_1 + valor_2;

    document.getElementById('calc').innerHTML += "<br />" + valor_1 + " + " + valor_2 + " = " +  resultado;
}
