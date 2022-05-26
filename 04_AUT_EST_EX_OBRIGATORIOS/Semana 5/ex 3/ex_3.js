const button = document.getElementById("calc");

button.addEventListener("click", function(){

    var lista = document.getElementById("lista").value.split(",");

    for(let i = 0; i < lista.length; i++){
        lista[i] = parseInt(lista[i]);
    }

    let bubbleSort = (lista) => {
        let len = lista.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (lista[j] > lista[j + 1]) {
                    let tmp = lista[j];
                    lista[j] = lista[j + 1];
                    lista[j + 1] = tmp;
                }
            }
        }
        return lista;
    };

    bubbleSort(lista);
    

    var valorFoco = document.getElementById("foco");
    var vf = parseInt(valorFoco.value);

    if(lista.includes(vf)){
        var vf_p = lista.indexOf(vf);
        var vf_posicao = vf_p - 1
    }

    document.getElementById("resultado").innerHTML = "Sua lista ordenada é: " + lista + " e o seu valor foco está na posição " + vf_posicao;
})


