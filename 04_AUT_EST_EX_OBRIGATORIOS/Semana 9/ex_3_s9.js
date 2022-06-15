const button = document.getElementById("button"); // chamei o botão

button.addEventListener("click", function(){ // essa função pega os valores dos nomes, os coloca em uma lista e em seguida ordena ela

    // criei a lista e peguei o valor que o usuário inseriu
    let lista = []
    let nome1 = document.getElementById("n1").value;
    let nome2 = document.getElementById("n2").value;
    let nome3 = document.getElementById("n3").value;

    // coloquei os valores na lista
    lista.push(nome1);
    lista.push(nome2);
    lista.push(nome3);

    // usei o bubblesort para ordenar a lista de strings
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


    document.getElementById("resultado").innerHTML = `Os nomes ordenados ficam dessa forma: ${lista}.` // imprimi na tela
})