const button = document.getElementById("button"); // chamo o botão

button.addEventListener("click", function(){ //essa função engloba o código todo e é responsável por todos os comandos
    
    let A = document.getElementById("qnt_A"); 
    let alunos = parseInt(A.value); //chamei o input da quantidade de alunos e transformei o número num inteiro
    let i = 1 
    
    while (i <= alunos){ // esse while adiciona os inputs de prova e trabalho de acordo com a quantidade de alunos inserida
        document.getElementById("add_inputs").innerHTML += `<label> Aluno ${i} </label> <br> <input type="text" id="Ap${i}" placeholder="prova"></input> <br> <input type="text" id="At${i}" placeholder="trabalho"></input> <br><br>`
        i++ 
    }
    
    // adicionei um botão que faz as contas das médias
    document.getElementById("add_inputs").innerHTML += `<button type="button" id="button_resultados"> Mostrar resultados</button> <br><br>`;

    const button2 = document.getElementById("button_resultados");

    button2.addEventListener("click", function(){ //essa função é responsável por fazer todos os cálculos pedidos
        
        var media_geral = 0
        var prova_geral = 0
        var trab_geral = 0
        var listaP = []
        var listaT = []
        let k = 1
        
        while (k <= alunos){ // esse while calcula individualmente a nota de cada aluno
           
            let NP = document.getElementById(`Ap${k}`);
            let nota_prova = parseFloat(NP.value); //chamei a nota da prova inserida

            let NT = document.getElementById(`At${k}`);
            let nota_trab = parseFloat(NT.value); // chamei a nota do trabalho inserida

            var media = ((nota_prova * 2) + (nota_trab * 3)) / 5;     
            document.getElementById("resultados").innerHTML += `A média do aluno ${k} é ${media}. <br>`; //imprime cada média de cada aluno por vez

            //eu criei essas variáveis "gerais" para facilitar algumas contas
            media_geral += media;
            prova_geral += nota_prova;
            trab_geral += nota_trab;

            //adiciono a nota de cada aluno na lista de provas e trabalhos
            listaP.push(nota_prova);
            listaT.push(nota_trab);

            k++
        }
    
        //deixei a lista de provas ordenada para poder pegar a maior e menor nota com mais facilidade
        let bubbleSort = (listaP) => {
            let len = listaP.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (listaP[j] > listaP[j + 1]) {
                        let tmp = listaP[j];
                        listaP[j] = listaP[j + 1];
                        listaP[j + 1] = tmp;
                    }
                }
            }
            return listaP;
        };
    
        bubbleSort(listaP);

        //deixei a lista de trabalhos ordenada para poder pegar a maior e menor nota com mais facilidade
        let bubbleSort2 = (listaT) => {
            let len = listaT.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (listaT[j] > listaT[j + 1]) {
                        let tmp = listaT[j];
                        listaT[j] = listaT[j + 1];
                        listaT[j + 1] = tmp;
                    }
                }
            }
            return listaT;
        };
    
        bubbleSort2(listaT);
        

        //variáveis que calculam algumas coisas que foram pedidas
        var MG = media_geral / alunos;
        var PG = prova_geral / alunos;
        var TG = trab_geral / alunos


        //aqui imprime os resultados na tela
        document.getElementById("resultados").innerHTML += `A média geral dos alunos é ${MG}. <br>` 
        document.getElementById("resultados").innerHTML += `A média aritimética das notas de prova é ${PG}. <br>`
        document.getElementById("resultados").innerHTML += `A média aritimética das notas do trabalho é ${TG}. <br>`
        document.getElementById("resultados").innerHTML += `A maior nota de prova é ${listaP[listaP.length-1]}, e a menor nota é ${listaP[0]}. <br>`
        document.getElementById("resultados").innerHTML += `A maior nota de trabalho é ${listaT[listaT.length-1]}, e a menor nota é ${listaT[0]}.`
        
    })

})