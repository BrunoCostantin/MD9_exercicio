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
    })
    
    $("ul").on("click", "li", function(){
        $(this).css("text-decoration", "line-through")
    }) 
    
})