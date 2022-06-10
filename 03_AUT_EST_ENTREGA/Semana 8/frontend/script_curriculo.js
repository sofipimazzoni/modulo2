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

function addevento(){
    $("#myModal").modal("show")
}

function fecharModal(){
    $("#myModal").modal("hide")
}

const tbody = document.getElementById("tbody");

$.ajax({
    url: "http://127.0.0.1:3078/eventosselect",
    type: 'GET',
    success: data => {
        data.forEach(element => {
            const tr = document.createElement("tr");
        tr.innerHTML = `

        <tr>
                <th scope="row">${element.IDevento}</th>
                <td>${element.Nome}</td>
                <td>${element.Duração}</td>
                <td>${element.Data}</td>
                <td>${element.Local}</td>
                <td><button onclick="deleteEvent(${element.IDevento})" id="button"><i class="bi bi-trash-fill"></i></button></td>
        </tr>
        `
        tbody.appendChild(tr);
        });
    }
});


function salvarEvento(){
    $("#myModal").modal("hide")
    var nome = document.getElementById("nome").value;
    var duracao = document.getElementById("duracao").value;
    var data = document.getElementById("data").value;
    var local = document.getElementById("local").value;
    
    var settings = {
        "url": "http://127.0.0.1:3078/eventosinsert",
        "method": "POST",
        "timeout": 0,
        "data": {
            "Nome": nome,
            "Duração": duracao,
            "Data": data,
            "Local": local,
        }
      };

      $.ajax(settings);
    };

function deleteEvent(id){
    const div = document.createElement("div");
    div.innerHTML = `
    <div id="myModal`+ id +`"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <p>Tem certeza que deseja excluir o evento com o ID ${id}?</p>
            </div>
            <div class="modal-footer">
            <button onclick="deleteconf(${id})" type="button" class="btn btn-primary">Confirmar exclusão</button>
            <button onclick="fecharModal2(${id})" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar exclusão</button>
            </div>
        </div>
        </div>
    </div>
    `
    document.body.appendChild(div);
    $('#myModal' + id).modal('show');
}

function fecharModal2(id){
    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();
}

function deleteconf(id){
    $.ajax({
        url: "http://127.0.0.1:3078/eventosdelete",
        type: "POST",
        data: {IDevento: id},
    })

    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();

}