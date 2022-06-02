//chamei o botão
const button = document.getElementById("button");

button.addEventListener("click", function(){ //função que confere se o número de telefone está certo

    let telefone = document.getElementById("num").value; //chamei o telefone do usuário

    //condições que confirmam se o telefone é válido ou não 
    if (!telefone.includes("(") || !telefone.includes(")")){ 
        alert("Você não digitou o número corretamente, digite de novo!")
    }

    else if (telefone.length > 14 || telefone.length < 14){
        alert("Você não digitou o número corretamente, digite de novo!")
    }

    else if (!telefone.includes("-")){
        alert("Você não digitou o número corretamente, digite de novo!")
    }

    else{
        alert("Número enviado com sucesso!")
    }
})