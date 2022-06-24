$('#botaoLista').click(function(){
    window.scrollTo(0, 0);
    $('.botaoSelecionar').toggleClass('botaoSelecionado');
    $('.botaoSelecionado').removeClass('botaoSelecionar');
    $('#botaoTabela').toggleClass('botaoSelecionar')
    $('#botaoTabela').removeClass('botaoSelecionado');
    $('#calendarioLista').toggleClass('calendarioLista');
    $('#calendarioTabela').toggleClass('calendarioTabela');
});

$('#botaoTabela').click(function(){
    window.scrollTo(0, 0);
    $('.botaoSelecionar').toggleClass('botaoSelecionado');
    $('.botaoSelecionado').removeClass('botaoSelecionar');
    $('#botaoLista').toggleClass('botaoSelecionar');
    $('#botaoLista').removeClass('botaoSelecionado');
    $('#calendarioLista').toggleClass('calendarioListaOcultar');
    $('#calendarioTabela').toggleClass('calendarioTabelaMostrar');
});


