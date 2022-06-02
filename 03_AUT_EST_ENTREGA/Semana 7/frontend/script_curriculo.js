console.log("entrou no js");


document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        addlinha();
    }
}

function addlinha(){
    var conteudo_html = "<h2> Desenvolvendo no momento </h2>"
    $("#novalinha_jquery").text("No momento estou desenvolvendo um projeto para uma ONG chamada Revirar, que cuida de pessoas em situação de rua. O objetivo é fazer um site que possua uma área administrativa para organizar a ficha de cada assistido");
    document.getElementById("novalinha").innerHTML = conteudo_html;
    
}