const button = document.getElementById("button"); // chamei o botão

button.addEventListener("click", function(){ // essa função irá realizar os cálculos que o exercício pediu

    let intervalo = document.getElementById("num").value.split(","); // peguei o intervalo que o usuário deseja e o tranformei em uma lista

    // transformei cada item da lista em um inteiro
    for(let i = 0; i < intervalo.length; i++){
        intervalo[i] = parseInt(intervalo[i]);
    }

    // esse while irá completar a lista "intervalo", para ela conter todos os números dentro do intervalo pedido, e irá ordenar a lista a cada número adicionado para que sua lógica funcione
    let i = 0
    while (intervalo[i] < intervalo[intervalo.length-1]){
        var new_number = intervalo[i] + 1;  
        intervalo.push(new_number); 

        let bubbleSort = (intervalo) => {
            let len = intervalo.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (intervalo[j] > intervalo[j + 1]) {
                        let tmp = intervalo[j];
                        intervalo[j] = intervalo[j + 1];
                        intervalo[j + 1] = tmp;
                    }
                }
            }
            return intervalo;
        };
    
        bubbleSort(intervalo);
        i++
    }

    
    intervalo.pop() 
    var isPrime = [] //criei uma lista que irá guardar os números primos
    var prime = true

    
    for(let h = 0; h < intervalo.length; h++){
        
        // esses dois ifs eliminam os algarismos "0" e "1" da lista, pois eles não são primos e podem estar na lista
        if (intervalo[0] == 0){
            intervalo.shift()
        }

        if (intervalo[0] == 1){
            intervalo.shift()
        }

        for(let j = 2; j < intervalo[h]; j++){ // esse for divide o número específico da lista por todos os menores que ele
            
            // esse if determina que os números da condição imposta são primos entre si
            if (intervalo[h] % j != 0){
                prime = true
            }

            // um número entra aqui caso a divisão dele por "j" seja igual a zero, ou seja, ele não é primo
            else if (intervalo[h] % j == 0){
                prime = false
                break
            };  
        };   
        
        // esse if adiciona o número na lista dos números primos caso ele se encaixe nas condições acima
        if (prime == true){
            isPrime.push(intervalo[h])
        }
    }

    document.getElementById("resultado").innerHTML = `Os números primos que estão dentro do intervalo inserido são: ${isPrime}.` // imprime na tela html
})
