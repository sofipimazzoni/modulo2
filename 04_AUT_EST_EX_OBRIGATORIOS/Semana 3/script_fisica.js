function CalcAltura(){
    var v0 = document.getElementById('v0').value;
    var g = 10;
    var t = v0 / g;
    var hmax = v0 ** 2 / (2*g); 

    document.getElementById('resultados').innerHTML = "A altura máxima é: " + hmax + " metros," + " e o tempo total de subida do objeto é: " + t + " segundos";
}