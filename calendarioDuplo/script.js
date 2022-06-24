var botaoLista = document.getElementById('botaoLista');
var botaoTabela = document.getElementById('botaoTabela');
var calendarioLista = document.getElementById('calendarioLista');
var calendarioTabela = document.getElementById('calendarioTabela');

function mostrarCalendarioTabela(){
    botaoLista.className = "botaoSelecionar";
    botaoTabela.className = "botaoSelecionado";
    calendarioLista.className = "calendarioListaOcultar";
    calendarioTabela.className = "calendarioTabelaMostrar";
}
function mostrarCalendarioLista(){
    botaoLista.className = "botaoSelecionado";
    botaoTabela.className = "botaoSelecionar";
    calendarioLista.className = "calendarioLista";
    calendarioTabela.className = "calendarioTabela";
}