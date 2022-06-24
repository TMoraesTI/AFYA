$('#botaoLista').click(function(){
    window.scrollTo(0, 0);
    $('.botaoSelecionar').toggleClass('botaoSelecionado');
    $('.botaoSelecionado').removeClass('botaoSelecionar');
    $('#botaoTabela').toggleClass('botaoSelecionar')
    $('#botaoTabela').removeClass('botaoSelecionado');
    $('#calendarioLista').toggleClass('calendarioLista');
    $('#calendarioLista').removeClass('calendarioListaOcultar');
    $('#calendarioTabela').toggleClass('calendarioTabela');
    $('#calendarioTabela').removeClass('calendarioTabelaMostrar');
});

$('#botaoTabela').click(function(){
    window.scrollTo(0, 0);
    $('.botaoSelecionar').toggleClass('botaoSelecionado');
    $('.botaoSelecionado').removeClass('botaoSelecionar');
    $('#botaoLista').toggleClass('botaoSelecionar');
    $('#botaoLista').removeClass('botaoSelecionado');
    $('#calendarioLista').toggleClass('calendarioListaOcultar');
    $('#calendarioLista').removeClass('calendarioLista');
    $('#calendarioTabela').toggleClass('calendarioTabelaMostrar');
    $('#calendarioTabela').removeClass('calendarioTabela');
});


