$(document).ready(function(){ 
    $("#botao-cadastrar").click(function() {
    })
    
    $("form").on("submit", function (e) {
        console.log("submit")
        e.preventDefault()
        const novaTarefa = $("mome-tarefa").val
        const novaLinha = $("<li></li>")
        $(`<a>${novaTarefa}</a>`).appendTo(novaLinha)
        $(
            `<div class="novas-tarefas">
                <a>${novaTarefa}</a>
            </div>
        `).appendTo(novaLinha)
        $(novaLinha).appendTo("ul")
    })
    
})