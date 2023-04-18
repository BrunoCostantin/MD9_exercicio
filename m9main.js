$(document).ready(function(){ 
    $("#botao-cadastrar").click(function() {
    })
    
    $("form").on("submit", function (e) {
        e.preventDefault()
        const novaTarefa = $("#nome-tarefa").val()
        const itemCriado = $(`<li>${novaTarefa}</li>`)
        

        $(novaTarefa).appendTo(itemCriado)
        $(itemCriado).appendTo('ul')
        $('#item-completado').val ('')

        $(itemCriado).click(function() {
            const itemCompleto = $(`<li><s>${itemCriado}</s><li>`)
            $(itemCompleto).appendTo('#item-completado')
        })    
    })
})