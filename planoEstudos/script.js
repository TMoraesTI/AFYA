

$('#linha13AVS .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegunda3AVSlinha1 = document.getElementById("horaInicioSegunda3AVSlinha1").value.split(':').map(Number);
    var horaFimSegunda3AVSlinha1 = document.getElementById("horaFimSegunda3AVSlinha1").value.split(':').map(Number);
    //Terca
    var horaInicioTerca3AVSlinha1 = document.getElementById("horaInicioTerca3AVSlinha1").value.split(':').map(Number);
    var horaFimTerca3AVSlinha1 = document.getElementById("horaFimTerca3AVSlinha1").value.split(':').map(Number);
    //Quarta
    var horaInicioQuarta3AVSlinha1 = document.getElementById("horaInicioQuarta3AVSlinha1").value.split(':').map(Number);
    var horaFimQuarta3AVSlinha1 = document.getElementById("horaFimQuarta3AVSlinha1").value.split(':').map(Number);
    //Quinta
    var horaInicioQuinta3AVSlinha1 = document.getElementById("horaInicioQuinta3AVSlinha1").value.split(':').map(Number);
    var horaFimQuinta3AVSlinha1 = document.getElementById("horaFimQuinta3AVSlinha1").value.split(':').map(Number);
    //Sexta
    var horaInicioSexta3AVSlinha1 = document.getElementById("horaInicioSexta3AVSlinha1").value.split(':').map(Number);
    var horaFimSexta3AVSlinha1 = document.getElementById("horaFimSexta3AVSlinha1").value.split(':').map(Number);
    //Sabado
    var horaInicioSabado3AVSlinha1 = document.getElementById("horaInicioSabado3AVSlinha1").value.split(':').map(Number);
    var horaFimSabado3AVSlinha1 = document.getElementById("horaFimSabado3AVSlinha1").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingo3AVSlinha1 = document.getElementById("horaInicioDomingo3AVSlinha1").value.split(':').map(Number);
    var horaFimDomingo3AVSlinha1 = document.getElementById("horaFimDomingo3AVSlinha1").value.split(':').map(Number);


    var diferecaHoraTotal3AVSlinha1 = ((horaFimSegunda3AVSlinha1[0]*60 + horaFimSegunda3AVSlinha1[1])+(horaFimTerca3AVSlinha1[0]*60 + horaFimTerca3AVSlinha1[1])+(horaFimQuarta3AVSlinha1[0]*60 + horaFimQuarta3AVSlinha1[1])+(horaFimQuinta3AVSlinha1[0]*60 + horaFimQuinta3AVSlinha1[1])+(horaFimSexta3AVSlinha1[0]*60 + horaFimSexta3AVSlinha1[1])+(horaFimSabado3AVSlinha1[0]*60 + horaFimSabado3AVSlinha1[1])+(horaFimDomingo3AVSlinha1[0]*60 + horaFimDomingo3AVSlinha1[1]))-((horaInicioSegunda3AVSlinha1[0]*60 + horaInicioSegunda3AVSlinha1[1])+(horaInicioTerca3AVSlinha1[0]*60 + horaInicioTerca3AVSlinha1[1])+(horaInicioQuarta3AVSlinha1[0]*60 + horaInicioQuarta3AVSlinha1[1])+(horaInicioQuinta3AVSlinha1[0]*60 + horaInicioQuinta3AVSlinha1[1])+(horaInicioSexta3AVSlinha1[0]*60 + horaInicioSexta3AVSlinha1[1])+(horaInicioSabado3AVSlinha1[0]*60 + horaInicioSabado3AVSlinha1[1])+(horaInicioDomingo3AVSlinha1[0]*60 + horaInicioDomingo3AVSlinha1[1]))
    if (diferecaHoraTotal3AVSlinha1 <= 0){
        diferecaHoraTotal3AVSlinha1 = 0
    }


    var MMHoraTotal3AVSlinha1 = diferecaHoraTotal3AVSlinha1%60;MMHoraTotal3AVSlinha1.toString().length==1?MMHoraTotal3AVSlinha1="0"+MMHoraTotal3AVSlinha1:0;
    if(isNaN(diferecaHoraTotal3AVSlinha1)) return;
    

    resultadoHoraTotal3AVSlinha1 = Math.floor((diferecaHoraTotal3AVSlinha1)/60) + "Hora(s) e " + MMHoraTotal3AVSlinha1 + "minuto(s)";
    

    document.getElementById("horaTotal3AVSlinha1").value = resultadoHoraTotal3AVSlinha1;
});

$('#linha23AVS .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegunda3AVSlinha2 = document.getElementById("horaInicioSegunda3AVSlinha2").value.split(':').map(Number);
    var horaFimSegunda3AVSlinha2 = document.getElementById("horaFimSegunda3AVSlinha2").value.split(':').map(Number);
    //Terca
    var horaInicioTerca3AVSlinha2 = document.getElementById("horaInicioTerca3AVSlinha2").value.split(':').map(Number);
    var horaFimTerca3AVSlinha2 = document.getElementById("horaFimTerca3AVSlinha2").value.split(':').map(Number);
    //Quarta
    var horaInicioQuarta3AVSlinha2 = document.getElementById("horaInicioQuarta3AVSlinha2").value.split(':').map(Number);
    var horaFimQuarta3AVSlinha2 = document.getElementById("horaFimQuarta3AVSlinha2").value.split(':').map(Number);
    //Quinta
    var horaInicioQuinta3AVSlinha2 = document.getElementById("horaInicioQuinta3AVSlinha2").value.split(':').map(Number);
    var horaFimQuinta3AVSlinha2 = document.getElementById("horaFimQuinta3AVSlinha2").value.split(':').map(Number);
    //Sexta
    var horaInicioSexta3AVSlinha2 = document.getElementById("horaInicioSexta3AVSlinha2").value.split(':').map(Number);
    var horaFimSexta3AVSlinha2 = document.getElementById("horaFimSexta3AVSlinha2").value.split(':').map(Number);
    //Sabado
    var horaInicioSabado3AVSlinha2 = document.getElementById("horaInicioSabado3AVSlinha2").value.split(':').map(Number);
    var horaFimSabado3AVSlinha2 = document.getElementById("horaFimSabado3AVSlinha2").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingo3AVSlinha2 = document.getElementById("horaInicioDomingo3AVSlinha2").value.split(':').map(Number);
    var horaFimDomingo3AVSlinha2 = document.getElementById("horaFimDomingo3AVSlinha2").value.split(':').map(Number);


    var diferecaHoraTotal3AVSlinha2 = ((horaFimSegunda3AVSlinha2[0]*60 + horaFimSegunda3AVSlinha2[1])+(horaFimTerca3AVSlinha2[0]*60 + horaFimTerca3AVSlinha2[1])+(horaFimQuarta3AVSlinha2[0]*60 + horaFimQuarta3AVSlinha2[1])+(horaFimQuinta3AVSlinha2[0]*60 + horaFimQuinta3AVSlinha2[1])+(horaFimSexta3AVSlinha2[0]*60 + horaFimSexta3AVSlinha2[1])+(horaFimSabado3AVSlinha2[0]*60 + horaFimSabado3AVSlinha2[1])+(horaFimDomingo3AVSlinha2[0]*60 + horaFimDomingo3AVSlinha2[1]))-((horaInicioSegunda3AVSlinha2[0]*60 + horaInicioSegunda3AVSlinha2[1])+(horaInicioTerca3AVSlinha2[0]*60 + horaInicioTerca3AVSlinha2[1])+(horaInicioQuarta3AVSlinha2[0]*60 + horaInicioQuarta3AVSlinha2[1])+(horaInicioQuinta3AVSlinha2[0]*60 + horaInicioQuinta3AVSlinha2[1])+(horaInicioSexta3AVSlinha2[0]*60 + horaInicioSexta3AVSlinha2[1])+(horaInicioSabado3AVSlinha2[0]*60 + horaInicioSabado3AVSlinha2[1])+(horaInicioDomingo3AVSlinha2[0]*60 + horaInicioDomingo3AVSlinha2[1]))
    if (diferecaHoraTotal3AVSlinha2 <= 0){
        diferecaHoraTotal3AVSlinha2 = 0
    }


    var MMHoraTotal3AVSlinha2 = diferecaHoraTotal3AVSlinha2%60;MMHoraTotal3AVSlinha2.toString().length==1?MMHoraTotal3AVSlinha2="0"+MMHoraTotal3AVSlinha2:0;
    if(isNaN(diferecaHoraTotal3AVSlinha2)) return;
    

    resultadoHoraTotal3AVSlinha2 = Math.floor((diferecaHoraTotal3AVSlinha2)/60) + "Hora(s) e " + MMHoraTotal3AVSlinha2 + "minuto(s)";
    

    document.getElementById("horaTotal3AVSlinha2").value = resultadoHoraTotal3AVSlinha2;
});

$('#linha33AVS .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegunda3AVSlinha3 = document.getElementById("horaInicioSegunda3AVSlinha3").value.split(':').map(Number);
    var horaFimSegunda3AVSlinha3 = document.getElementById("horaFimSegunda3AVSlinha3").value.split(':').map(Number);
    //Terca
    var horaInicioTerca3AVSlinha3 = document.getElementById("horaInicioTerca3AVSlinha3").value.split(':').map(Number);
    var horaFimTerca3AVSlinha3 = document.getElementById("horaFimTerca3AVSlinha3").value.split(':').map(Number);
    //Quarta
    var horaInicioQuarta3AVSlinha3 = document.getElementById("horaInicioQuarta3AVSlinha3").value.split(':').map(Number);
    var horaFimQuarta3AVSlinha3 = document.getElementById("horaFimQuarta3AVSlinha3").value.split(':').map(Number);
    //Quinta
    var horaInicioQuinta3AVSlinha3 = document.getElementById("horaInicioQuinta3AVSlinha3").value.split(':').map(Number);
    var horaFimQuinta3AVSlinha3 = document.getElementById("horaFimQuinta3AVSlinha3").value.split(':').map(Number);
    //Sexta
    var horaInicioSexta3AVSlinha3 = document.getElementById("horaInicioSexta3AVSlinha3").value.split(':').map(Number);
    var horaFimSexta3AVSlinha3 = document.getElementById("horaFimSexta3AVSlinha3").value.split(':').map(Number);
    //Sabado
    var horaInicioSabado3AVSlinha3 = document.getElementById("horaInicioSabado3AVSlinha3").value.split(':').map(Number);
    var horaFimSabado3AVSlinha3 = document.getElementById("horaFimSabado3AVSlinha3").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingo3AVSlinha3 = document.getElementById("horaInicioDomingo3AVSlinha3").value.split(':').map(Number);
    var horaFimDomingo3AVSlinha3 = document.getElementById("horaFimDomingo3AVSlinha3").value.split(':').map(Number);


    var diferecaHoraTotal3AVSlinha3 = ((horaFimSegunda3AVSlinha3[0]*60 + horaFimSegunda3AVSlinha3[1])+(horaFimTerca3AVSlinha3[0]*60 + horaFimTerca3AVSlinha3[1])+(horaFimQuarta3AVSlinha3[0]*60 + horaFimQuarta3AVSlinha3[1])+(horaFimQuinta3AVSlinha3[0]*60 + horaFimQuinta3AVSlinha3[1])+(horaFimSexta3AVSlinha3[0]*60 + horaFimSexta3AVSlinha3[1])+(horaFimSabado3AVSlinha3[0]*60 + horaFimSabado3AVSlinha3[1])+(horaFimDomingo3AVSlinha3[0]*60 + horaFimDomingo3AVSlinha3[1]))-((horaInicioSegunda3AVSlinha3[0]*60 + horaInicioSegunda3AVSlinha3[1])+(horaInicioTerca3AVSlinha3[0]*60 + horaInicioTerca3AVSlinha3[1])+(horaInicioQuarta3AVSlinha3[0]*60 + horaInicioQuarta3AVSlinha3[1])+(horaInicioQuinta3AVSlinha3[0]*60 + horaInicioQuinta3AVSlinha3[1])+(horaInicioSexta3AVSlinha3[0]*60 + horaInicioSexta3AVSlinha3[1])+(horaInicioSabado3AVSlinha3[0]*60 + horaInicioSabado3AVSlinha3[1])+(horaInicioDomingo3AVSlinha3[0]*60 + horaInicioDomingo3AVSlinha3[1]))
    if (diferecaHoraTotal3AVSlinha3 <= 0){
        diferecaHoraTotal3AVSlinha3 = 0
    }


    var MMHoraTotal3AVSlinha3 = diferecaHoraTotal3AVSlinha3%60;MMHoraTotal3AVSlinha3.toString().length==1?MMHoraTotal3AVSlinha3="0"+MMHoraTotal3AVSlinha3:0;
    if(isNaN(diferecaHoraTotal3AVSlinha3)) return;
    

    resultadoHoraTotal3AVSlinha3 = Math.floor((diferecaHoraTotal3AVSlinha3)/60) + "Hora(s) e " + MMHoraTotal3AVSlinha3 + "minuto(s)";
    

    document.getElementById("horaTotal3AVSlinha3").value = resultadoHoraTotal3AVSlinha3;
});

$('#linha43AVS .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegunda3AVSlinha4 = document.getElementById("horaInicioSegunda3AVSlinha4").value.split(':').map(Number);
    var horaFimSegunda3AVSlinha4 = document.getElementById("horaFimSegunda3AVSlinha4").value.split(':').map(Number);
    //Terca
    var horaInicioTerca3AVSlinha4 = document.getElementById("horaInicioTerca3AVSlinha4").value.split(':').map(Number);
    var horaFimTerca3AVSlinha4 = document.getElementById("horaFimTerca3AVSlinha4").value.split(':').map(Number);
    //Quarta
    var horaInicioQuarta3AVSlinha4 = document.getElementById("horaInicioQuarta3AVSlinha4").value.split(':').map(Number);
    var horaFimQuarta3AVSlinha4 = document.getElementById("horaFimQuarta3AVSlinha4").value.split(':').map(Number);
    //Quinta
    var horaInicioQuinta3AVSlinha4 = document.getElementById("horaInicioQuinta3AVSlinha4").value.split(':').map(Number);
    var horaFimQuinta3AVSlinha4 = document.getElementById("horaFimQuinta3AVSlinha4").value.split(':').map(Number);
    //Sexta
    var horaInicioSexta3AVSlinha4 = document.getElementById("horaInicioSexta3AVSlinha4").value.split(':').map(Number);
    var horaFimSexta3AVSlinha4 = document.getElementById("horaFimSexta3AVSlinha4").value.split(':').map(Number);
    //Sabado
    var horaInicioSabado3AVSlinha4 = document.getElementById("horaInicioSabado3AVSlinha4").value.split(':').map(Number);
    var horaFimSabado3AVSlinha4 = document.getElementById("horaFimSabado3AVSlinha4").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingo3AVSlinha4 = document.getElementById("horaInicioDomingo3AVSlinha4").value.split(':').map(Number);
    var horaFimDomingo3AVSlinha4 = document.getElementById("horaFimDomingo3AVSlinha4").value.split(':').map(Number);


    var diferecaHoraTotal3AVSlinha4 = ((horaFimSegunda3AVSlinha4[0]*60 + horaFimSegunda3AVSlinha4[1])+(horaFimTerca3AVSlinha4[0]*60 + horaFimTerca3AVSlinha4[1])+(horaFimQuarta3AVSlinha4[0]*60 + horaFimQuarta3AVSlinha4[1])+(horaFimQuinta3AVSlinha4[0]*60 + horaFimQuinta3AVSlinha4[1])+(horaFimSexta3AVSlinha4[0]*60 + horaFimSexta3AVSlinha4[1])+(horaFimSabado3AVSlinha4[0]*60 + horaFimSabado3AVSlinha4[1])+(horaFimDomingo3AVSlinha4[0]*60 + horaFimDomingo3AVSlinha4[1]))-((horaInicioSegunda3AVSlinha4[0]*60 + horaInicioSegunda3AVSlinha4[1])+(horaInicioTerca3AVSlinha4[0]*60 + horaInicioTerca3AVSlinha4[1])+(horaInicioQuarta3AVSlinha4[0]*60 + horaInicioQuarta3AVSlinha4[1])+(horaInicioQuinta3AVSlinha4[0]*60 + horaInicioQuinta3AVSlinha4[1])+(horaInicioSexta3AVSlinha4[0]*60 + horaInicioSexta3AVSlinha4[1])+(horaInicioSabado3AVSlinha4[0]*60 + horaInicioSabado3AVSlinha4[1])+(horaInicioDomingo3AVSlinha4[0]*60 + horaInicioDomingo3AVSlinha4[1]))
    if (diferecaHoraTotal3AVSlinha4 <= 0){
        diferecaHoraTotal3AVSlinha4 = 0
    }


    var MMHoraTotal3AVSlinha4 = diferecaHoraTotal3AVSlinha4%60;MMHoraTotal3AVSlinha4.toString().length==1?MMHoraTotal3AVSlinha4="0"+MMHoraTotal3AVSlinha4:0;
    if(isNaN(diferecaHoraTotal3AVSlinha4)) return;
    

    resultadoHoraTotal3AVSlinha4 = Math.floor((diferecaHoraTotal3AVSlinha4)/60) + "Hora(s) e " + MMHoraTotal3AVSlinha4 + "minuto(s)";
    

    document.getElementById("horaTotal3AVSlinha4").value = resultadoHoraTotal3AVSlinha3;
});


$('#linha53AVS .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegunda3AVSlinha5 = document.getElementById("horaInicioSegunda3AVSlinha5").value.split(':').map(Number);
    var horaFimSegunda3AVSlinha5 = document.getElementById("horaFimSegunda3AVSlinha5").value.split(':').map(Number);
    //Terca
    var horaInicioTerca3AVSlinha5 = document.getElementById("horaInicioTerca3AVSlinha5").value.split(':').map(Number);
    var horaFimTerca3AVSlinha5 = document.getElementById("horaFimTerca3AVSlinha5").value.split(':').map(Number);
    //Quarta
    var horaInicioQuarta3AVSlinha5 = document.getElementById("horaInicioQuarta3AVSlinha5").value.split(':').map(Number);
    var horaFimQuarta3AVSlinha5 = document.getElementById("horaFimQuarta3AVSlinha5").value.split(':').map(Number);
    //Quinta
    var horaInicioQuinta3AVSlinha5 = document.getElementById("horaInicioQuinta3AVSlinha5").value.split(':').map(Number);
    var horaFimQuinta3AVSlinha5 = document.getElementById("horaFimQuinta3AVSlinha5").value.split(':').map(Number);
    //Sexta
    var horaInicioSexta3AVSlinha5 = document.getElementById("horaInicioSexta3AVSlinha5").value.split(':').map(Number);
    var horaFimSexta3AVSlinha5 = document.getElementById("horaFimSexta3AVSlinha5").value.split(':').map(Number);
    //Sabado
    var horaInicioSabado3AVSlinha5 = document.getElementById("horaInicioSabado3AVSlinha5").value.split(':').map(Number);
    var horaFimSabado3AVSlinha5 = document.getElementById("horaFimSabado3AVSlinha5").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingo3AVSlinha5 = document.getElementById("horaInicioDomingo3AVSlinha5").value.split(':').map(Number);
    var horaFimDomingo3AVSlinha5 = document.getElementById("horaFimDomingo3AVSlinha5").value.split(':').map(Number);


    var diferecaHoraTotal3AVSlinha5 = ((horaFimSegunda3AVSlinha5[0]*60 + horaFimSegunda3AVSlinha5[1])+(horaFimTerca3AVSlinha5[0]*60 + horaFimTerca3AVSlinha5[1])+(horaFimQuarta3AVSlinha5[0]*60 + horaFimQuarta3AVSlinha5[1])+(horaFimQuinta3AVSlinha5[0]*60 + horaFimQuinta3AVSlinha5[1])+(horaFimSexta3AVSlinha5[0]*60 + horaFimSexta3AVSlinha5[1])+(horaFimSabado3AVSlinha5[0]*60 + horaFimSabado3AVSlinha5[1])+(horaFimDomingo3AVSlinha5[0]*60 + horaFimDomingo3AVSlinha5[1]))-((horaInicioSegunda3AVSlinha5[0]*60 + horaInicioSegunda3AVSlinha5[1])+(horaInicioTerca3AVSlinha5[0]*60 + horaInicioTerca3AVSlinha5[1])+(horaInicioQuarta3AVSlinha5[0]*60 + horaInicioQuarta3AVSlinha5[1])+(horaInicioQuinta3AVSlinha5[0]*60 + horaInicioQuinta3AVSlinha5[1])+(horaInicioSexta3AVSlinha5[0]*60 + horaInicioSexta3AVSlinha5[1])+(horaInicioSabado3AVSlinha5[0]*60 + horaInicioSabado3AVSlinha5[1])+(horaInicioDomingo3AVSlinha5[0]*60 + horaInicioDomingo3AVSlinha5[1]))
    if (diferecaHoraTotal3AVSlinha5 <= 0){
        diferecaHoraTotal3AVSlinha5 = 0
    }


    var MMHoraTotal3AVSlinha5 = diferecaHoraTotal3AVSlinha5%60;MMHoraTotal3AVSlinha5.toString().length==1?MMHoraTotal3AVSlinha5="0"+MMHoraTotal3AVSlinha5:0;
    if(isNaN(diferecaHoraTotal3AVSlinha5)) return;
    

    resultadoHoraTotal3AVSlinha5 = Math.floor((diferecaHoraTotal3AVSlinha5)/60) + "Hora(s) e " + MMHoraTotal3AVSlinha5 + "minuto(s)";
    

    document.getElementById("horaTotal3AVSlinha5").value = resultadoHoraTotal3AVSlinha5;
});



$('#linha1NU .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundaNUlinha1 = document.getElementById("horaInicioSegundaNUlinha1").value.split(':').map(Number);
    var horaFimSegundaNUlinha1 = document.getElementById("horaFimSegundaNUlinha1").value.split(':').map(Number);
    //Terca
    var horaInicioTercaNUlinha1 = document.getElementById("horaInicioTercaNUlinha1").value.split(':').map(Number);
    var horaFimTercaNUlinha1 = document.getElementById("horaFimTercaNUlinha1").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartaNUlinha1 = document.getElementById("horaInicioQuartaNUlinha1").value.split(':').map(Number);
    var horaFimQuartaNUlinha1 = document.getElementById("horaFimQuartaNUlinha1").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintaNUlinha1 = document.getElementById("horaInicioQuintaNUlinha1").value.split(':').map(Number);
    var horaFimQuintaNUlinha1 = document.getElementById("horaFimQuintaNUlinha1").value.split(':').map(Number);
    //Sexta
    var horaInicioSextaNUlinha1 = document.getElementById("horaInicioSextaNUlinha1").value.split(':').map(Number);
    var horaFimSextaNUlinha1 = document.getElementById("horaFimSextaNUlinha1").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadoNUlinha1 = document.getElementById("horaInicioSabadoNUlinha1").value.split(':').map(Number);
    var horaFimSabadoNUlinha1 = document.getElementById("horaFimSabadoNUlinha1").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingoNUlinha1 = document.getElementById("horaInicioDomingoNUlinha1").value.split(':').map(Number);
    var horaFimDomingoNUlinha1 = document.getElementById("horaFimDomingoNUlinha1").value.split(':').map(Number);


    var diferecaHoraTotalNUlinha1 = ((horaFimSegundaNUlinha1[0]*60 + horaFimSegundaNUlinha1[1])+(horaFimTercaNUlinha1[0]*60 + horaFimTercaNUlinha1[1])+(horaFimQuartaNUlinha1[0]*60 + horaFimQuartaNUlinha1[1])+(horaFimQuintaNUlinha1[0]*60 + horaFimQuintaNUlinha1[1])+(horaFimSextaNUlinha1[0]*60 + horaFimSextaNUlinha1[1])+(horaFimSabadoNUlinha1[0]*60 + horaFimSabadoNUlinha1[1])+(horaFimDomingoNUlinha1[0]*60 + horaFimDomingoNUlinha1[1]))-((horaInicioSegundaNUlinha1[0]*60 + horaInicioSegundaNUlinha1[1])+(horaInicioTercaNUlinha1[0]*60 + horaInicioTercaNUlinha1[1])+(horaInicioQuartaNUlinha1[0]*60 + horaInicioQuartaNUlinha1[1])+(horaInicioQuintaNUlinha1[0]*60 + horaInicioQuintaNUlinha1[1])+(horaInicioSextaNUlinha1[0]*60 + horaInicioSextaNUlinha1[1])+(horaInicioSabadoNUlinha1[0]*60 + horaInicioSabadoNUlinha1[1])+(horaInicioDomingoNUlinha1[0]*60 + horaInicioDomingoNUlinha1[1]))
    if (diferecaHoraTotalNUlinha1 <= 0){
        diferecaHoraTotalNUlinha1 = 0
    }


    var MMHoraTotalNUlinha1 = diferecaHoraTotalNUlinha1%60;MMHoraTotalNUlinha1.toString().length==1?MMHoraTotalNUlinha1="0"+MMHoraTotalNUlinha1:0;
    if(isNaN(diferecaHoraTotalNUlinha1)) return;
    

    resultadoHoraTotalNUlinha1 = Math.floor((diferecaHoraTotalNUlinha1)/60) + "Hora(s) e " + MMHoraTotalNUlinha1 + "minuto(s)";
    

    document.getElementById("horaTotalNUlinha1").value = resultadoHoraTotalNUlinha1;
});

$('#linha2NU .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundaNUlinha2 = document.getElementById("horaInicioSegundaNUlinha2").value.split(':').map(Number);
    var horaFimSegundaNUlinha2 = document.getElementById("horaFimSegundaNUlinha2").value.split(':').map(Number);
    //Terca
    var horaInicioTercaNUlinha2 = document.getElementById("horaInicioTercaNUlinha2").value.split(':').map(Number);
    var horaFimTercaNUlinha2 = document.getElementById("horaFimTercaNUlinha2").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartaNUlinha2 = document.getElementById("horaInicioQuartaNUlinha2").value.split(':').map(Number);
    var horaFimQuartaNUlinha2 = document.getElementById("horaFimQuartaNUlinha2").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintaNUlinha2 = document.getElementById("horaInicioQuintaNUlinha2").value.split(':').map(Number);
    var horaFimQuintaNUlinha2 = document.getElementById("horaFimQuintaNUlinha2").value.split(':').map(Number);
    //Sexta
    var horaInicioSextaNUlinha2 = document.getElementById("horaInicioSextaNUlinha2").value.split(':').map(Number);
    var horaFimSextaNUlinha2 = document.getElementById("horaFimSextaNUlinha2").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadoNUlinha2 = document.getElementById("horaInicioSabadoNUlinha2").value.split(':').map(Number);
    var horaFimSabadoNUlinha2 = document.getElementById("horaFimSabadoNUlinha2").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingoNUlinha2 = document.getElementById("horaInicioDomingoNUlinha2").value.split(':').map(Number);
    var horaFimDomingoNUlinha2 = document.getElementById("horaFimDomingoNUlinha2").value.split(':').map(Number);


    var diferecaHoraTotalNUlinha2 = ((horaFimSegundaNUlinha2[0]*60 + horaFimSegundaNUlinha2[1])+(horaFimTercaNUlinha2[0]*60 + horaFimTercaNUlinha2[1])+(horaFimQuartaNUlinha2[0]*60 + horaFimQuartaNUlinha2[1])+(horaFimQuintaNUlinha2[0]*60 + horaFimQuintaNUlinha2[1])+(horaFimSextaNUlinha2[0]*60 + horaFimSextaNUlinha2[1])+(horaFimSabadoNUlinha2[0]*60 + horaFimSabadoNUlinha2[1])+(horaFimDomingoNUlinha2[0]*60 + horaFimDomingoNUlinha2[1]))-((horaInicioSegundaNUlinha2[0]*60 + horaInicioSegundaNUlinha2[1])+(horaInicioTercaNUlinha2[0]*60 + horaInicioTercaNUlinha2[1])+(horaInicioQuartaNUlinha2[0]*60 + horaInicioQuartaNUlinha2[1])+(horaInicioQuintaNUlinha2[0]*60 + horaInicioQuintaNUlinha2[1])+(horaInicioSextaNUlinha2[0]*60 + horaInicioSextaNUlinha2[1])+(horaInicioSabadoNUlinha2[0]*60 + horaInicioSabadoNUlinha2[1])+(horaInicioDomingoNUlinha2[0]*60 + horaInicioDomingoNUlinha2[1]))
    if (diferecaHoraTotalNUlinha2 <= 0){
        diferecaHoraTotalNUlinha2 = 0
    }


    var MMHoraTotalNUlinha2 = diferecaHoraTotalNUlinha2%60;MMHoraTotalNUlinha2.toString().length==1?MMHoraTotalNUlinha2="0"+MMHoraTotalNUlinha2:0;
    if(isNaN(diferecaHoraTotalNUlinha2)) return;
    

    resultadoHoraTotalNUlinha2 = Math.floor((diferecaHoraTotalNUlinha2)/60) + "Hora(s) e " + MMHoraTotalNUlinha2 + "minuto(s)";
    

    document.getElementById("horaTotalNUlinha2").value = resultadoHoraTotalNUlinha2;
});

$('#linha3NU .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundaNUlinha3 = document.getElementById("horaInicioSegundaNUlinha3").value.split(':').map(Number);
    var horaFimSegundaNUlinha3 = document.getElementById("horaFimSegundaNUlinha3").value.split(':').map(Number);
    //Terca
    var horaInicioTercaNUlinha3 = document.getElementById("horaInicioTercaNUlinha3").value.split(':').map(Number);
    var horaFimTercaNUlinha3 = document.getElementById("horaFimTercaNUlinha3").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartaNUlinha3 = document.getElementById("horaInicioQuartaNUlinha3").value.split(':').map(Number);
    var horaFimQuartaNUlinha3 = document.getElementById("horaFimQuartaNUlinha3").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintaNUlinha3 = document.getElementById("horaInicioQuintaNUlinha3").value.split(':').map(Number);
    var horaFimQuintaNUlinha3 = document.getElementById("horaFimQuintaNUlinha3").value.split(':').map(Number);
    //Sexta
    var horaInicioSextaNUlinha3 = document.getElementById("horaInicioSextaNUlinha3").value.split(':').map(Number);
    var horaFimSextaNUlinha3 = document.getElementById("horaFimSextaNUlinha3").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadoNUlinha3 = document.getElementById("horaInicioSabadoNUlinha3").value.split(':').map(Number);
    var horaFimSabadoNUlinha3 = document.getElementById("horaFimSabadoNUlinha3").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingoNUlinha3 = document.getElementById("horaInicioDomingoNUlinha3").value.split(':').map(Number);
    var horaFimDomingoNUlinha3 = document.getElementById("horaFimDomingoNUlinha3").value.split(':').map(Number);


    var diferecaHoraTotalNUlinha3 = ((horaFimSegundaNUlinha3[0]*60 + horaFimSegundaNUlinha3[1])+(horaFimTercaNUlinha3[0]*60 + horaFimTercaNUlinha3[1])+(horaFimQuartaNUlinha3[0]*60 + horaFimQuartaNUlinha3[1])+(horaFimQuintaNUlinha3[0]*60 + horaFimQuintaNUlinha3[1])+(horaFimSextaNUlinha3[0]*60 + horaFimSextaNUlinha3[1])+(horaFimSabadoNUlinha3[0]*60 + horaFimSabadoNUlinha3[1])+(horaFimDomingoNUlinha3[0]*60 + horaFimDomingoNUlinha3[1]))-((horaInicioSegundaNUlinha3[0]*60 + horaInicioSegundaNUlinha3[1])+(horaInicioTercaNUlinha3[0]*60 + horaInicioTercaNUlinha3[1])+(horaInicioQuartaNUlinha3[0]*60 + horaInicioQuartaNUlinha3[1])+(horaInicioQuintaNUlinha3[0]*60 + horaInicioQuintaNUlinha3[1])+(horaInicioSextaNUlinha3[0]*60 + horaInicioSextaNUlinha3[1])+(horaInicioSabadoNUlinha3[0]*60 + horaInicioSabadoNUlinha3[1])+(horaInicioDomingoNUlinha3[0]*60 + horaInicioDomingoNUlinha3[1]))
    if (diferecaHoraTotalNUlinha3 <= 0){
        diferecaHoraTotalNUlinha3 = 0
    }


    var MMHoraTotalNUlinha3 = diferecaHoraTotalNUlinha3%60;MMHoraTotalNUlinha3.toString().length==1?MMHoraTotalNUlinha3="0"+MMHoraTotalNUlinha3:0;
    if(isNaN(diferecaHoraTotalNUlinha3)) return;
    

    resultadoHoraTotalNUlinha3 = Math.floor((diferecaHoraTotalNUlinha3)/60) + "Hora(s) e " + MMHoraTotalNUlinha3 + "minuto(s)";
    

    document.getElementById("horaTotalNUlinha3").value = resultadoHoraTotalNUlinha3;
});

$('#linha4NU .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundaNUlinha4 = document.getElementById("horaInicioSegundaNUlinha4").value.split(':').map(Number);
    var horaFimSegundaNUlinha4 = document.getElementById("horaFimSegundaNUlinha4").value.split(':').map(Number);
    //Terca
    var horaInicioTercaNUlinha4 = document.getElementById("horaInicioTercaNUlinha4").value.split(':').map(Number);
    var horaFimTercaNUlinha4 = document.getElementById("horaFimTercaNUlinha4").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartaNUlinha4 = document.getElementById("horaInicioQuartaNUlinha4").value.split(':').map(Number);
    var horaFimQuartaNUlinha4 = document.getElementById("horaFimQuartaNUlinha4").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintaNUlinha4 = document.getElementById("horaInicioQuintaNUlinha4").value.split(':').map(Number);
    var horaFimQuintaNUlinha4 = document.getElementById("horaFimQuintaNUlinha4").value.split(':').map(Number);
    //Sexta
    var horaInicioSextaNUlinha4 = document.getElementById("horaInicioSextaNUlinha4").value.split(':').map(Number);
    var horaFimSextaNUlinha4 = document.getElementById("horaFimSextaNUlinha4").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadoNUlinha4 = document.getElementById("horaInicioSabadoNUlinha4").value.split(':').map(Number);
    var horaFimSabadoNUlinha4 = document.getElementById("horaFimSabadoNUlinha4").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingoNUlinha4 = document.getElementById("horaInicioDomingoNUlinha4").value.split(':').map(Number);
    var horaFimDomingoNUlinha4 = document.getElementById("horaFimDomingoNUlinha4").value.split(':').map(Number);


    var diferecaHoraTotalNUlinha4 = ((horaFimSegundaNUlinha4[0]*60 + horaFimSegundaNUlinha4[1])+(horaFimTercaNUlinha4[0]*60 + horaFimTercaNUlinha4[1])+(horaFimQuartaNUlinha4[0]*60 + horaFimQuartaNUlinha4[1])+(horaFimQuintaNUlinha4[0]*60 + horaFimQuintaNUlinha4[1])+(horaFimSextaNUlinha4[0]*60 + horaFimSextaNUlinha4[1])+(horaFimSabadoNUlinha4[0]*60 + horaFimSabadoNUlinha4[1])+(horaFimDomingoNUlinha4[0]*60 + horaFimDomingoNUlinha4[1]))-((horaInicioSegundaNUlinha4[0]*60 + horaInicioSegundaNUlinha4[1])+(horaInicioTercaNUlinha4[0]*60 + horaInicioTercaNUlinha4[1])+(horaInicioQuartaNUlinha4[0]*60 + horaInicioQuartaNUlinha4[1])+(horaInicioQuintaNUlinha4[0]*60 + horaInicioQuintaNUlinha4[1])+(horaInicioSextaNUlinha4[0]*60 + horaInicioSextaNUlinha4[1])+(horaInicioSabadoNUlinha4[0]*60 + horaInicioSabadoNUlinha4[1])+(horaInicioDomingoNUlinha4[0]*60 + horaInicioDomingoNUlinha4[1]))
    if (diferecaHoraTotalNUlinha4 <= 0){
        diferecaHoraTotalNUlinha4 = 0
    }


    var MMHoraTotalNUlinha4 = diferecaHoraTotalNUlinha4%60;MMHoraTotalNUlinha4.toString().length==1?MMHoraTotalNUlinha4="0"+MMHoraTotalNUlinha4:0;
    if(isNaN(diferecaHoraTotalNUlinha4)) return;
    

    resultadoHoraTotalNUlinha4 = Math.floor((diferecaHoraTotalNUlinha4)/60) + "Hora(s) e " + MMHoraTotalNUlinha4 + "minuto(s)";
    

    document.getElementById("horaTotalNUlinha4").value = resultadoHoraTotalNUlinha4;
});

$('#linha5NU .conteudoDiaSemana .hora').on('change',function(){
    //Segunda
    var horaInicioSegundaNUlinha5 = document.getElementById("horaInicioSegundaNUlinha5").value.split(':').map(Number);
    var horaFimSegundaNUlinha5 = document.getElementById("horaFimSegundaNUlinha5").value.split(':').map(Number);
    //Terca
    var horaInicioTercaNUlinha5 = document.getElementById("horaInicioTercaNUlinha5").value.split(':').map(Number);
    var horaFimTercaNUlinha5 = document.getElementById("horaFimTercaNUlinha5").value.split(':').map(Number);
    //Quarta
    var horaInicioQuartaNUlinha5 = document.getElementById("horaInicioQuartaNUlinha5").value.split(':').map(Number);
    var horaFimQuartaNUlinha5 = document.getElementById("horaFimQuartaNUlinha5").value.split(':').map(Number);
    //Quinta
    var horaInicioQuintaNUlinha5 = document.getElementById("horaInicioQuintaNUlinha5").value.split(':').map(Number);
    var horaFimQuintaNUlinha5 = document.getElementById("horaFimQuintaNUlinha5").value.split(':').map(Number);
    //Sexta
    var horaInicioSextaNUlinha5 = document.getElementById("horaInicioSextaNUlinha5").value.split(':').map(Number);
    var horaFimSextaNUlinha5 = document.getElementById("horaFimSextaNUlinha5").value.split(':').map(Number);
    //Sabado
    var horaInicioSabadoNUlinha5 = document.getElementById("horaInicioSabadoNUlinha5").value.split(':').map(Number);
    var horaFimSabadoNUlinha5 = document.getElementById("horaFimSabadoNUlinha5").value.split(':').map(Number);
    //Domingo
    var horaInicioDomingoNUlinha5 = document.getElementById("horaInicioDomingoNUlinha5").value.split(':').map(Number);
    var horaFimDomingoNUlinha5 = document.getElementById("horaFimDomingoNUlinha5").value.split(':').map(Number);


    var diferecaHoraTotalNUlinha5 = ((horaFimSegundaNUlinha5[0]*60 + horaFimSegundaNUlinha5[1])+(horaFimTercaNUlinha5[0]*60 + horaFimTercaNUlinha5[1])+(horaFimQuartaNUlinha5[0]*60 + horaFimQuartaNUlinha5[1])+(horaFimQuintaNUlinha5[0]*60 + horaFimQuintaNUlinha5[1])+(horaFimSextaNUlinha5[0]*60 + horaFimSextaNUlinha5[1])+(horaFimSabadoNUlinha5[0]*60 + horaFimSabadoNUlinha5[1])+(horaFimDomingoNUlinha5[0]*60 + horaFimDomingoNUlinha5[1]))-((horaInicioSegundaNUlinha5[0]*60 + horaInicioSegundaNUlinha5[1])+(horaInicioTercaNUlinha5[0]*60 + horaInicioTercaNUlinha5[1])+(horaInicioQuartaNUlinha5[0]*60 + horaInicioQuartaNUlinha5[1])+(horaInicioQuintaNUlinha5[0]*60 + horaInicioQuintaNUlinha5[1])+(horaInicioSextaNUlinha5[0]*60 + horaInicioSextaNUlinha5[1])+(horaInicioSabadoNUlinha5[0]*60 + horaInicioSabadoNUlinha5[1])+(horaInicioDomingoNUlinha5[0]*60 + horaInicioDomingoNUlinha5[1]))
    if (diferecaHoraTotalNUlinha5 <= 0){
        diferecaHoraTotalNUlinha5 = 0
    }


    var MMHoraTotalNUlinha5 = diferecaHoraTotalNUlinha5%60;MMHoraTotalNUlinha5.toString().length==1?MMHoraTotalNUlinha5="0"+MMHoraTotalNUlinha5:0;
    if(isNaN(diferecaHoraTotalNUlinha5)) return;
    

    resultadoHoraTotalNUlinha5 = Math.floor((diferecaHoraTotalNUlinha5)/60) + "Hora(s) e " + MMHoraTotalNUlinha5 + "minuto(s)";
    

    document.getElementById("horaTotalNUlinha5").value = resultadoHoraTotalNUlinha5;
});


$('.hora').on('change',function(){
    var horaTotal3AVSlinha1 = document.getElementById("horaTotal3AVSlinha1").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotal3AVSlinha2 = document.getElementById("horaTotal3AVSlinha2").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotal3AVSlinha3 = document.getElementById("horaTotal3AVSlinha3").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotal3AVSlinha4 = document.getElementById("horaTotal3AVSlinha4").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotal3AVSlinha5 = document.getElementById("horaTotal3AVSlinha5").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);

    var horaTotalNUlinha1 = document.getElementById("horaTotalNUlinha1").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotalNUlinha2 = document.getElementById("horaTotalNUlinha2").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotalNUlinha3 = document.getElementById("horaTotalNUlinha3").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotalNUlinha4 = document.getElementById("horaTotalNUlinha4").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);
    var horaTotalNUlinha5 = document.getElementById("horaTotalNUlinha5").value.replace("minuto(s)","").split('Hora(s) e ').map(Number);

    var horasTotais = (horaTotal3AVSlinha1[0]*60 + horaTotal3AVSlinha1[1]) + (horaTotal3AVSlinha2[0]*60 + horaTotal3AVSlinha2[1]) + (horaTotal3AVSlinha3[0]*60 + horaTotal3AVSlinha3[1]) + (horaTotal3AVSlinha4[0]*60 + horaTotal3AVSlinha4[1]) + (horaTotal3AVSlinha5[0]*60 + horaTotal3AVSlinha5[1]) + (horaTotalNUlinha1[0]*60 + horaTotalNUlinha1[1]) + (horaTotalNUlinha2[0]*60 + horaTotalNUlinha2[1]) + (horaTotalNUlinha3[0]*60 + horaTotalNUlinha3[1]) + (horaTotalNUlinha4[0]*60 + horaTotalNUlinha4[1]) + (horaTotalNUlinha5[0]*60 + horaTotalNUlinha5[1]);


    var MMHorasTotais = horasTotais%60;MMHorasTotais.toString().length==1?MMHorasTotais="0"+MMHorasTotais:0;
    if(isNaN(horasTotais)) return;
    

    resultadoHorasTotais = Math.floor((horasTotais)/60) + "Hora(s) e " + MMHorasTotais + "minuto(s)";


    document.getElementById("horasTotais").value = resultadoHorasTotais;
});



$('#conteudoDiaSemanaSegunda3AVSlinha1 .hora').on('change',function(){
    var horaInicioSegunda3AVSlinha1 = document.getElementById("horaInicioSegunda3AVSlinha1");
    var horaFimSegunda3AVSlinha1 = document.getElementById("horaFimSegunda3AVSlinha1");
    
    if (horaInicioSegunda3AVSlinha1.value == "00:00" && horaFimSegunda3AVSlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegunda3AVSlinha1.value == "" || horaFimSegunda3AVSlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTerca3AVSlinha1 .hora').on('change',function(){
    var horaInicioTerca3AVSlinha1 = document.getElementById("horaInicioTerca3AVSlinha1");
    var horaFimTerca3AVSlinha1 = document.getElementById("horaFimTerca3AVSlinha1");
    
    if (horaInicioTerca3AVSlinha1.value == "00:00" && horaFimTerca3AVSlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTerca3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTerca3AVSlinha1.value == "" || horaFimTerca3AVSlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaTerca3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTerca3AVSlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuarta3AVSlinha1 .hora').on('change',function(){
    var horaInicioQuarta3AVSlinha1 = document.getElementById("horaInicioQuarta3AVSlinha1");
    var horaFimQuarta3AVSlinha1 = document.getElementById("horaFimQuarta3AVSlinha1");
    
    if (horaInicioQuarta3AVSlinha1.value == "00:00" && horaFimQuarta3AVSlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuarta3AVSlinha1.value == "" || horaFimQuarta3AVSlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuinta3AVSlinha1 .hora').on('change',function(){
    var horaInicioQuinta3AVSlinha1 = document.getElementById("horaInicioQuinta3AVSlinha1");
    var horaFimQuinta3AVSlinha1 = document.getElementById("horaFimQuinta3AVSlinha1");
    
    if (horaInicioQuinta3AVSlinha1.value == "00:00" && horaFimQuinta3AVSlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuinta3AVSlinha1.value == "" || horaFimQuinta3AVSlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSexta3AVSlinha1 .hora').on('change',function(){
    var horaInicioSexta3AVSlinha1 = document.getElementById("horaInicioSexta3AVSlinha1");
    var horaFimSexta3AVSlinha1 = document.getElementById("horaFimSexta3AVSlinha1");
    
    if (horaInicioSexta3AVSlinha1.value == "00:00" && horaFimSexta3AVSlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSexta3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSexta3AVSlinha1.value == "" || horaFimSexta3AVSlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaSexta3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSexta3AVSlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabado3AVSlinha1 .hora').on('change',function(){
    var horaInicioSabado3AVSlinha1 = document.getElementById("horaInicioSabado3AVSlinha1");
    var horaFimSabado3AVSlinha1 = document.getElementById("horaFimSabado3AVSlinha1");
    
    if (horaInicioSabado3AVSlinha1.value == "00:00" && horaFimSabado3AVSlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabado3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabado3AVSlinha1.value == "" || horaFimSabado3AVSlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaSabado3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabado3AVSlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingo3AVSlinha1 .hora').on('change',function(){
    var horaInicioDomingo3AVSlinha1 = document.getElementById("horaInicioDomingo3AVSlinha1");
    var horaFimDomingo3AVSlinha1 = document.getElementById("horaFimDomingo3AVSlinha1");
    
    if (horaInicioDomingo3AVSlinha1.value == "00:00" && horaFimDomingo3AVSlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingo3AVSlinha1.value == "" || horaFimDomingo3AVSlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha1').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegunda3AVSlinha2 .hora').on('change',function(){
    var horaInicioSegunda3AVSlinha2 = document.getElementById("horaInicioSegunda3AVSlinha2");
    var horaFimSegunda3AVSlinha2 = document.getElementById("horaFimSegunda3AVSlinha2");
    
    if (horaInicioSegunda3AVSlinha2.value == "00:00" && horaFimSegunda3AVSlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegunda3AVSlinha2.value == "" || horaFimSegunda3AVSlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTerca3AVSlinha2 .hora').on('change',function(){
    var horaInicioTerca3AVSlinha2 = document.getElementById("horaInicioTerca3AVSlinha2");
    var horaFimTerca3AVSlinha2 = document.getElementById("horaFimTerca3AVSlinha2");
    
    if (horaInicioTerca3AVSlinha2.value == "00:00" && horaFimTerca3AVSlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTerca3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTerca3AVSlinha2.value == "" || horaFimTerca3AVSlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaTerca3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTerca3AVSlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuarta3AVSlinha2 .hora').on('change',function(){
    var horaInicioQuarta3AVSlinha2 = document.getElementById("horaInicioQuarta3AVSlinha2");
    var horaFimQuarta3AVSlinha2 = document.getElementById("horaFimQuarta3AVSlinha2");
    
    if (horaInicioQuarta3AVSlinha2.value == "00:00" && horaFimQuarta3AVSlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuarta3AVSlinha2.value == "" || horaFimQuarta3AVSlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuinta3AVSlinha2 .hora').on('change',function(){
    var horaInicioQuinta3AVSlinha2 = document.getElementById("horaInicioQuinta3AVSlinha2");
    var horaFimQuinta3AVSlinha2 = document.getElementById("horaFimQuinta3AVSlinha2");
    
    if (horaInicioQuinta3AVSlinha2.value == "00:00" && horaFimQuinta3AVSlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuinta3AVSlinha2.value == "" || horaFimQuinta3AVSlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSexta3AVSlinha2 .hora').on('change',function(){
    var horaInicioSexta3AVSlinha2 = document.getElementById("horaInicioSexta3AVSlinha2");
    var horaFimSexta3AVSlinha2 = document.getElementById("horaFimSexta3AVSlinha2");
    
    if (horaInicioSexta3AVSlinha2.value == "00:00" && horaFimSexta3AVSlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSexta3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSexta3AVSlinha2.value == "" || horaFimSexta3AVSlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaSexta3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSexta3AVSlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabado3AVSlinha2 .hora').on('change',function(){
    var horaInicioSabado3AVSlinha2 = document.getElementById("horaInicioSabado3AVSlinha2");
    var horaFimSabado3AVSlinha2 = document.getElementById("horaFimSabado3AVSlinha2");
    
    if (horaInicioSabado3AVSlinha2.value == "00:00" && horaFimSabado3AVSlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabado3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabado3AVSlinha2.value == "" || horaFimSabado3AVSlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaSabado3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabado3AVSlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingo3AVSlinha2 .hora').on('change',function(){
    var horaInicioDomingo3AVSlinha2 = document.getElementById("horaInicioDomingo3AVSlinha2");
    var horaFimDomingo3AVSlinha2 = document.getElementById("horaFimDomingo3AVSlinha2");
    
    if (horaInicioDomingo3AVSlinha2.value == "00:00" && horaFimDomingo3AVSlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingo3AVSlinha2.value == "" || horaFimDomingo3AVSlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha2').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegunda3AVSlinha3 .hora').on('change',function(){
    var horaInicioSegunda3AVSlinha3 = document.getElementById("horaInicioSegunda3AVSlinha3");
    var horaFimSegunda3AVSlinha3 = document.getElementById("horaFimSegunda3AVSlinha3");
    
    if (horaInicioSegunda3AVSlinha3.value == "00:00" && horaFimSegunda3AVSlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegunda3AVSlinha3.value == "" || horaFimSegunda3AVSlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTerca3AVSlinha3 .hora').on('change',function(){
    var horaInicioTerca3AVSlinha3 = document.getElementById("horaInicioTerca3AVSlinha3");
    var horaFimTerca3AVSlinha3 = document.getElementById("horaFimTerca3AVSlinha3");
    
    if (horaInicioTerca3AVSlinha3.value == "00:00" && horaFimTerca3AVSlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTerca3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTerca3AVSlinha3.value == "" || horaFimTerca3AVSlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaTerca3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTerca3AVSlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuarta3AVSlinha3 .hora').on('change',function(){
    var horaInicioQuarta3AVSlinha3 = document.getElementById("horaInicioQuarta3AVSlinha3");
    var horaFimQuarta3AVSlinha3 = document.getElementById("horaFimQuarta3AVSlinha3");
    
    if (horaInicioQuarta3AVSlinha3.value == "00:00" && horaFimQuarta3AVSlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuarta3AVSlinha3.value == "" || horaFimQuarta3AVSlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuinta3AVSlinha3 .hora').on('change',function(){
    var horaInicioQuinta3AVSlinha3 = document.getElementById("horaInicioQuinta3AVSlinha3");
    var horaFimQuinta3AVSlinha3 = document.getElementById("horaFimQuinta3AVSlinha3");
    
    if (horaInicioQuinta3AVSlinha3.value == "00:00" && horaFimQuinta3AVSlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuinta3AVSlinha3.value == "" || horaFimQuinta3AVSlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSexta3AVSlinha3 .hora').on('change',function(){
    var horaInicioSexta3AVSlinha3 = document.getElementById("horaInicioSexta3AVSlinha3");
    var horaFimSexta3AVSlinha3 = document.getElementById("horaFimSexta3AVSlinha3");
    
    if (horaInicioSexta3AVSlinha3.value == "00:00" && horaFimSexta3AVSlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSexta3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSexta3AVSlinha3.value == "" || horaFimSexta3AVSlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaSexta3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSexta3AVSlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabado3AVSlinha3 .hora').on('change',function(){
    var horaInicioSabado3AVSlinha3 = document.getElementById("horaInicioSabado3AVSlinha3");
    var horaFimSabado3AVSlinha3 = document.getElementById("horaFimSabado3AVSlinha3");
    
    if (horaInicioSabado3AVSlinha3.value == "00:00" && horaFimSabado3AVSlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabado3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabado3AVSlinha3.value == "" || horaFimSabado3AVSlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaSabado3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabado3AVSlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingo3AVSlinha3 .hora').on('change',function(){
    var horaInicioDomingo3AVSlinha3 = document.getElementById("horaInicioDomingo3AVSlinha3");
    var horaFimDomingo3AVSlinha3 = document.getElementById("horaFimDomingo3AVSlinha3");
    
    if (horaInicioDomingo3AVSlinha3.value == "00:00" && horaFimDomingo3AVSlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingo3AVSlinha3.value == "" || horaFimDomingo3AVSlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha3').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegunda3AVSlinha4 .hora').on('change',function(){
    var horaInicioSegunda3AVSlinha4 = document.getElementById("horaInicioSegunda3AVSlinha4");
    var horaFimSegunda3AVSlinha4 = document.getElementById("horaFimSegunda3AVSlinha4");
    
    if (horaInicioSegunda3AVSlinha4.value == "00:00" && horaFimSegunda3AVSlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegunda3AVSlinha4.value == "" || horaFimSegunda3AVSlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTerca3AVSlinha4 .hora').on('change',function(){
    var horaInicioTerca3AVSlinha4 = document.getElementById("horaInicioTerca3AVSlinha4");
    var horaFimTerca3AVSlinha4 = document.getElementById("horaFimTerca3AVSlinha4");
    
    if (horaInicioTerca3AVSlinha4.value == "00:00" && horaFimTerca3AVSlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTerca3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTerca3AVSlinha4.value == "" || horaFimTerca3AVSlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaTerca3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTerca3AVSlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuarta3AVSlinha4 .hora').on('change',function(){
    var horaInicioQuarta3AVSlinha4 = document.getElementById("horaInicioQuarta3AVSlinha4");
    var horaFimQuarta3AVSlinha4 = document.getElementById("horaFimQuarta3AVSlinha4");
    
    if (horaInicioQuarta3AVSlinha4.value == "00:00" && horaFimQuarta3AVSlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuarta3AVSlinha4.value == "" || horaFimQuarta3AVSlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuinta3AVSlinha4 .hora').on('change',function(){
    var horaInicioQuinta3AVSlinha4 = document.getElementById("horaInicioQuinta3AVSlinha4");
    var horaFimQuinta3AVSlinha4 = document.getElementById("horaFimQuinta3AVSlinha4");
    
    if (horaInicioQuinta3AVSlinha4.value == "00:00" && horaFimQuinta3AVSlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuinta3AVSlinha4.value == "" || horaFimQuinta3AVSlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSexta3AVSlinha4 .hora').on('change',function(){
    var horaInicioSexta3AVSlinha4 = document.getElementById("horaInicioSexta3AVSlinha4");
    var horaFimSexta3AVSlinha4 = document.getElementById("horaFimSexta3AVSlinha4");
    
    if (horaInicioSexta3AVSlinha4.value == "00:00" && horaFimSexta3AVSlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSexta3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSexta3AVSlinha4.value == "" || horaFimSexta3AVSlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaSexta3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSexta3AVSlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabado3AVSlinha4 .hora').on('change',function(){
    var horaInicioSabado3AVSlinha4 = document.getElementById("horaInicioSabado3AVSlinha4");
    var horaFimSabado3AVSlinha4 = document.getElementById("horaFimSabado3AVSlinha4");
    
    if (horaInicioSabado3AVSlinha4.value == "00:00" && horaFimSabado3AVSlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabado3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabado3AVSlinha4.value == "" || horaFimSabado3AVSlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaSabado3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabado3AVSlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingo3AVSlinha4 .hora').on('change',function(){
    var horaInicioDomingo3AVSlinha4 = document.getElementById("horaInicioDomingo3AVSlinha4");
    var horaFimDomingo3AVSlinha4 = document.getElementById("horaFimDomingo3AVSlinha4");
    
    if (horaInicioDomingo3AVSlinha4.value == "00:00" && horaFimDomingo3AVSlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingo3AVSlinha4.value == "" || horaFimDomingo3AVSlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha4').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegunda3AVSlinha5 .hora').on('change',function(){
    var horaInicioSegunda3AVSlinha5 = document.getElementById("horaInicioSegunda3AVSlinha5");
    var horaFimSegunda3AVSlinha5 = document.getElementById("horaFimSegunda3AVSlinha5");
    
    if (horaInicioSegunda3AVSlinha5.value == "00:00" && horaFimSegunda3AVSlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegunda3AVSlinha5.value == "" || horaFimSegunda3AVSlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegunda3AVSlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTerca3AVSlinha5 .hora').on('change',function(){
    var horaInicioTerca3AVSlinha5 = document.getElementById("horaInicioTerca3AVSlinha5");
    var horaFimTerca3AVSlinha5 = document.getElementById("horaFimTerca3AVSlinha5");
    
    if (horaInicioTerca3AVSlinha5.value == "00:00" && horaFimTerca3AVSlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTerca3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTerca3AVSlinha5.value == "" || horaFimTerca3AVSlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaTerca3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTerca3AVSlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuarta3AVSlinha5 .hora').on('change',function(){
    var horaInicioQuarta3AVSlinha5 = document.getElementById("horaInicioQuarta3AVSlinha5");
    var horaFimQuarta3AVSlinha5 = document.getElementById("horaFimQuarta3AVSlinha5");
    
    if (horaInicioQuarta3AVSlinha5.value == "00:00" && horaFimQuarta3AVSlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuarta3AVSlinha5.value == "" || horaFimQuarta3AVSlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuarta3AVSlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuinta3AVSlinha5 .hora').on('change',function(){
    var horaInicioQuinta3AVSlinha5 = document.getElementById("horaInicioQuinta3AVSlinha5");
    var horaFimQuinta3AVSlinha5 = document.getElementById("horaFimQuinta3AVSlinha5");
    
    if (horaInicioQuinta3AVSlinha5.value == "00:00" && horaFimQuinta3AVSlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuinta3AVSlinha5.value == "" || horaFimQuinta3AVSlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuinta3AVSlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSexta3AVSlinha5 .hora').on('change',function(){
    var horaInicioSexta3AVSlinha5 = document.getElementById("horaInicioSexta3AVSlinha5");
    var horaFimSexta3AVSlinha5 = document.getElementById("horaFimSexta3AVSlinha5");
    
    if (horaInicioSexta3AVSlinha5.value == "00:00" && horaFimSexta3AVSlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSexta3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSexta3AVSlinha5.value == "" || horaFimSexta3AVSlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaSexta3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSexta3AVSlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabado3AVSlinha5 .hora').on('change',function(){
    var horaInicioSabado3AVSlinha5 = document.getElementById("horaInicioSabado3AVSlinha5");
    var horaFimSabado3AVSlinha5 = document.getElementById("horaFimSabado3AVSlinha5");
    
    if (horaInicioSabado3AVSlinha5.value == "00:00" && horaFimSabado3AVSlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabado3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabado3AVSlinha5.value == "" || horaFimSabado3AVSlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaSabado3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabado3AVSlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingo3AVSlinha5 .hora').on('change',function(){
    var horaInicioDomingo3AVSlinha5 = document.getElementById("horaInicioDomingo3AVSlinha5");
    var horaFimDomingo3AVSlinha5 = document.getElementById("horaFimDomingo3AVSlinha5");
    
    if (horaInicioDomingo3AVSlinha5.value == "00:00" && horaFimDomingo3AVSlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingo3AVSlinha5.value == "" || horaFimDomingo3AVSlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingo3AVSlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSegundaNUlinha1 .hora').on('change',function(){
    var horaInicioSegundaNUlinha1 = document.getElementById("horaInicioSegundaNUlinha1");
    var horaFimSegundaNUlinha1 = document.getElementById("horaFimSegundaNUlinha1");
    
    if (horaInicioSegundaNUlinha1.value == "00:00" && horaFimSegundaNUlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundaNUlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundaNUlinha1.value == "" || horaFimSegundaNUlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundaNUlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundaNUlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercaNUlinha1 .hora').on('change',function(){
    var horaInicioTercaNUlinha1 = document.getElementById("horaInicioTercaNUlinha1");
    var horaFimTercaNUlinha1 = document.getElementById("horaFimTercaNUlinha1");
    
    if (horaInicioTercaNUlinha1.value == "00:00" && horaFimTercaNUlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercaNUlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercaNUlinha1.value == "" || horaFimTercaNUlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaTercaNUlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercaNUlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartaNUlinha1 .hora').on('change',function(){
    var horaInicioQuartaNUlinha1 = document.getElementById("horaInicioQuartaNUlinha1");
    var horaFimQuartaNUlinha1 = document.getElementById("horaFimQuartaNUlinha1");
    
    if (horaInicioQuartaNUlinha1.value == "00:00" && horaFimQuartaNUlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartaNUlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartaNUlinha1.value == "" || horaFimQuartaNUlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartaNUlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartaNUlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintaNUlinha1 .hora').on('change',function(){
    var horaInicioQuintaNUlinha1 = document.getElementById("horaInicioQuintaNUlinha1");
    var horaFimQuintaNUlinha1 = document.getElementById("horaFimQuintaNUlinha1");
    
    if (horaInicioQuintaNUlinha1.value == "00:00" && horaFimQuintaNUlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintaNUlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintaNUlinha1.value == "" || horaFimQuintaNUlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintaNUlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintaNUlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextaNUlinha1 .hora').on('change',function(){
    var horaInicioSextaNUlinha1 = document.getElementById("horaInicioSextaNUlinha1");
    var horaFimSextaNUlinha1 = document.getElementById("horaFimSextaNUlinha1");
    
    if (horaInicioSextaNUlinha1.value == "00:00" && horaFimSextaNUlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextaNUlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextaNUlinha1.value == "" || horaFimSextaNUlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaSextaNUlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextaNUlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadoNUlinha1 .hora').on('change',function(){
    var horaInicioSabadoNUlinha1 = document.getElementById("horaInicioSabadoNUlinha1");
    var horaFimSabadoNUlinha1 = document.getElementById("horaFimSabadoNUlinha1");
    
    if (horaInicioSabadoNUlinha1.value == "00:00" && horaFimSabadoNUlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadoNUlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadoNUlinha1.value == "" || horaFimSabadoNUlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadoNUlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadoNUlinha1').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingoNUlinha1 .hora').on('change',function(){
    var horaInicioDomingoNUlinha1 = document.getElementById("horaInicioDomingoNUlinha1");
    var horaFimDomingoNUlinha1 = document.getElementById("horaFimDomingoNUlinha1");
    
    if (horaInicioDomingoNUlinha1.value == "00:00" && horaFimDomingoNUlinha1.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingoNUlinha1').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingoNUlinha1.value == "" || horaFimDomingoNUlinha1.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingoNUlinha1').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingoNUlinha1').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegundaNUlinha2 .hora').on('change',function(){
    var horaInicioSegundaNUlinha2 = document.getElementById("horaInicioSegundaNUlinha2");
    var horaFimSegundaNUlinha2 = document.getElementById("horaFimSegundaNUlinha2");
    
    if (horaInicioSegundaNUlinha2.value == "00:00" && horaFimSegundaNUlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundaNUlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundaNUlinha2.value == "" || horaFimSegundaNUlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundaNUlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundaNUlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercaNUlinha2 .hora').on('change',function(){
    var horaInicioTercaNUlinha2 = document.getElementById("horaInicioTercaNUlinha2");
    var horaFimTercaNUlinha2 = document.getElementById("horaFimTercaNUlinha2");
    
    if (horaInicioTercaNUlinha2.value == "00:00" && horaFimTercaNUlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercaNUlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercaNUlinha2.value == "" || horaFimTercaNUlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaTercaNUlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercaNUlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartaNUlinha2 .hora').on('change',function(){
    var horaInicioQuartaNUlinha2 = document.getElementById("horaInicioQuartaNUlinha2");
    var horaFimQuartaNUlinha2 = document.getElementById("horaFimQuartaNUlinha2");
    
    if (horaInicioQuartaNUlinha2.value == "00:00" && horaFimQuartaNUlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartaNUlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartaNUlinha2.value == "" || horaFimQuartaNUlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartaNUlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartaNUlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintaNUlinha2 .hora').on('change',function(){
    var horaInicioQuintaNUlinha2 = document.getElementById("horaInicioQuintaNUlinha2");
    var horaFimQuintaNUlinha2 = document.getElementById("horaFimQuintaNUlinha2");
    
    if (horaInicioQuintaNUlinha2.value == "00:00" && horaFimQuintaNUlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintaNUlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintaNUlinha2.value == "" || horaFimQuintaNUlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintaNUlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintaNUlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextaNUlinha2 .hora').on('change',function(){
    var horaInicioSextaNUlinha2 = document.getElementById("horaInicioSextaNUlinha2");
    var horaFimSextaNUlinha2 = document.getElementById("horaFimSextaNUlinha2");
    
    if (horaInicioSextaNUlinha2.value == "00:00" && horaFimSextaNUlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextaNUlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextaNUlinha2.value == "" || horaFimSextaNUlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaSextaNUlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextaNUlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadoNUlinha2 .hora').on('change',function(){
    var horaInicioSabadoNUlinha2 = document.getElementById("horaInicioSabadoNUlinha2");
    var horaFimSabadoNUlinha2 = document.getElementById("horaFimSabadoNUlinha2");
    
    if (horaInicioSabadoNUlinha2.value == "00:00" && horaFimSabadoNUlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadoNUlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadoNUlinha2.value == "" || horaFimSabadoNUlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadoNUlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadoNUlinha2').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingoNUlinha2 .hora').on('change',function(){
    var horaInicioDomingoNUlinha2 = document.getElementById("horaInicioDomingoNUlinha2");
    var horaFimDomingoNUlinha2 = document.getElementById("horaFimDomingoNUlinha2");
    
    if (horaInicioDomingoNUlinha2.value == "00:00" && horaFimDomingoNUlinha2.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingoNUlinha2').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingoNUlinha2.value == "" || horaFimDomingoNUlinha2.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingoNUlinha2').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingoNUlinha2').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegundaNUlinha3 .hora').on('change',function(){
    var horaInicioSegundaNUlinha3 = document.getElementById("horaInicioSegundaNUlinha3");
    var horaFimSegundaNUlinha3 = document.getElementById("horaFimSegundaNUlinha3");
    
    if (horaInicioSegundaNUlinha3.value == "00:00" && horaFimSegundaNUlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundaNUlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundaNUlinha3.value == "" || horaFimSegundaNUlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundaNUlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundaNUlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercaNUlinha3 .hora').on('change',function(){
    var horaInicioTercaNUlinha3 = document.getElementById("horaInicioTercaNUlinha3");
    var horaFimTercaNUlinha3 = document.getElementById("horaFimTercaNUlinha3");
    
    if (horaInicioTercaNUlinha3.value == "00:00" && horaFimTercaNUlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercaNUlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercaNUlinha3.value == "" || horaFimTercaNUlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaTercaNUlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercaNUlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartaNUlinha3 .hora').on('change',function(){
    var horaInicioQuartaNUlinha3 = document.getElementById("horaInicioQuartaNUlinha3");
    var horaFimQuartaNUlinha3 = document.getElementById("horaFimQuartaNUlinha3");
    
    if (horaInicioQuartaNUlinha3.value == "00:00" && horaFimQuartaNUlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartaNUlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartaNUlinha3.value == "" || horaFimQuartaNUlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartaNUlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartaNUlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintaNUlinha3 .hora').on('change',function(){
    var horaInicioQuintaNUlinha3 = document.getElementById("horaInicioQuintaNUlinha3");
    var horaFimQuintaNUlinha3 = document.getElementById("horaFimQuintaNUlinha3");
    
    if (horaInicioQuintaNUlinha3.value == "00:00" && horaFimQuintaNUlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintaNUlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintaNUlinha3.value == "" || horaFimQuintaNUlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintaNUlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintaNUlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextaNUlinha3 .hora').on('change',function(){
    var horaInicioSextaNUlinha3 = document.getElementById("horaInicioSextaNUlinha3");
    var horaFimSextaNUlinha3 = document.getElementById("horaFimSextaNUlinha3");
    
    if (horaInicioSextaNUlinha3.value == "00:00" && horaFimSextaNUlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextaNUlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextaNUlinha3.value == "" || horaFimSextaNUlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaSextaNUlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextaNUlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadoNUlinha3 .hora').on('change',function(){
    var horaInicioSabadoNUlinha3 = document.getElementById("horaInicioSabadoNUlinha3");
    var horaFimSabadoNUlinha3 = document.getElementById("horaFimSabadoNUlinha3");
    
    if (horaInicioSabadoNUlinha3.value == "00:00" && horaFimSabadoNUlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadoNUlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadoNUlinha3.value == "" || horaFimSabadoNUlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadoNUlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadoNUlinha3').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingoNUlinha3 .hora').on('change',function(){
    var horaInicioDomingoNUlinha3 = document.getElementById("horaInicioDomingoNUlinha3");
    var horaFimDomingoNUlinha3 = document.getElementById("horaFimDomingoNUlinha3");
    
    if (horaInicioDomingoNUlinha3.value == "00:00" && horaFimDomingoNUlinha3.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingoNUlinha3').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingoNUlinha3.value == "" || horaFimDomingoNUlinha3.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingoNUlinha3').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingoNUlinha3').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegundaNUlinha4 .hora').on('change',function(){
    var horaInicioSegundaNUlinha4 = document.getElementById("horaInicioSegundaNUlinha4");
    var horaFimSegundaNUlinha4 = document.getElementById("horaFimSegundaNUlinha4");
    
    if (horaInicioSegundaNUlinha4.value == "00:00" && horaFimSegundaNUlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundaNUlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundaNUlinha4.value == "" || horaFimSegundaNUlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundaNUlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundaNUlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercaNUlinha4 .hora').on('change',function(){
    var horaInicioTercaNUlinha4 = document.getElementById("horaInicioTercaNUlinha4");
    var horaFimTercaNUlinha4 = document.getElementById("horaFimTercaNUlinha4");
    
    if (horaInicioTercaNUlinha4.value == "00:00" && horaFimTercaNUlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercaNUlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercaNUlinha4.value == "" || horaFimTercaNUlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaTercaNUlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercaNUlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartaNUlinha4 .hora').on('change',function(){
    var horaInicioQuartaNUlinha4 = document.getElementById("horaInicioQuartaNUlinha4");
    var horaFimQuartaNUlinha4 = document.getElementById("horaFimQuartaNUlinha4");
    
    if (horaInicioQuartaNUlinha4.value == "00:00" && horaFimQuartaNUlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartaNUlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartaNUlinha4.value == "" || horaFimQuartaNUlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartaNUlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartaNUlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintaNUlinha4 .hora').on('change',function(){
    var horaInicioQuintaNUlinha4 = document.getElementById("horaInicioQuintaNUlinha4");
    var horaFimQuintaNUlinha4 = document.getElementById("horaFimQuintaNUlinha4");
    
    if (horaInicioQuintaNUlinha4.value == "00:00" && horaFimQuintaNUlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintaNUlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintaNUlinha4.value == "" || horaFimQuintaNUlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintaNUlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintaNUlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextaNUlinha4 .hora').on('change',function(){
    var horaInicioSextaNUlinha4 = document.getElementById("horaInicioSextaNUlinha4");
    var horaFimSextaNUlinha4 = document.getElementById("horaFimSextaNUlinha4");
    
    if (horaInicioSextaNUlinha4.value == "00:00" && horaFimSextaNUlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextaNUlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextaNUlinha4.value == "" || horaFimSextaNUlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaSextaNUlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextaNUlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadoNUlinha4 .hora').on('change',function(){
    var horaInicioSabadoNUlinha4 = document.getElementById("horaInicioSabadoNUlinha4");
    var horaFimSabadoNUlinha4 = document.getElementById("horaFimSabadoNUlinha4");
    
    if (horaInicioSabadoNUlinha4.value == "00:00" && horaFimSabadoNUlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadoNUlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadoNUlinha4.value == "" || horaFimSabadoNUlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadoNUlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadoNUlinha4').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingoNUlinha4 .hora').on('change',function(){
    var horaInicioDomingoNUlinha4 = document.getElementById("horaInicioDomingoNUlinha4");
    var horaFimDomingoNUlinha4 = document.getElementById("horaFimDomingoNUlinha4");
    
    if (horaInicioDomingoNUlinha4.value == "00:00" && horaFimDomingoNUlinha4.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingoNUlinha4').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingoNUlinha4.value == "" || horaFimDomingoNUlinha4.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingoNUlinha4').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingoNUlinha4').style.backgroundColor = "#E5E8E7";
    }
});


$('#conteudoDiaSemanaSegundaNUlinha5 .hora').on('change',function(){
    var horaInicioSegundaNUlinha5 = document.getElementById("horaInicioSegundaNUlinha5");
    var horaFimSegundaNUlinha5 = document.getElementById("horaFimSegundaNUlinha5");
    
    if (horaInicioSegundaNUlinha5.value == "00:00" && horaFimSegundaNUlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSegundaNUlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSegundaNUlinha5.value == "" || horaFimSegundaNUlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaSegundaNUlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSegundaNUlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaTercaNUlinha5 .hora').on('change',function(){
    var horaInicioTercaNUlinha5 = document.getElementById("horaInicioTercaNUlinha5");
    var horaFimTercaNUlinha5 = document.getElementById("horaFimTercaNUlinha5");
    
    if (horaInicioTercaNUlinha5.value == "00:00" && horaFimTercaNUlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaTercaNUlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioTercaNUlinha5.value == "" || horaFimTercaNUlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaTercaNUlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaTercaNUlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuartaNUlinha5 .hora').on('change',function(){
    var horaInicioQuartaNUlinha5 = document.getElementById("horaInicioQuartaNUlinha5");
    var horaFimQuartaNUlinha5 = document.getElementById("horaFimQuartaNUlinha5");
    
    if (horaInicioQuartaNUlinha5.value == "00:00" && horaFimQuartaNUlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuartaNUlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuartaNUlinha5.value == "" || horaFimQuartaNUlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaQuartaNUlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuartaNUlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaQuintaNUlinha5 .hora').on('change',function(){
    var horaInicioQuintaNUlinha5 = document.getElementById("horaInicioQuintaNUlinha5");
    var horaFimQuintaNUlinha5 = document.getElementById("horaFimQuintaNUlinha5");
    
    if (horaInicioQuintaNUlinha5.value == "00:00" && horaFimQuintaNUlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaQuintaNUlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioQuintaNUlinha5.value == "" || horaFimQuintaNUlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaQuintaNUlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaQuintaNUlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSextaNUlinha5 .hora').on('change',function(){
    var horaInicioSextaNUlinha5 = document.getElementById("horaInicioSextaNUlinha5");
    var horaFimSextaNUlinha5 = document.getElementById("horaFimSextaNUlinha5");
    
    if (horaInicioSextaNUlinha5.value == "00:00" && horaFimSextaNUlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSextaNUlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSextaNUlinha5.value == "" || horaFimSextaNUlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaSextaNUlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSextaNUlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaSabadoNUlinha5 .hora').on('change',function(){
    var horaInicioSabadoNUlinha5 = document.getElementById("horaInicioSabadoNUlinha5");
    var horaFimSabadoNUlinha5 = document.getElementById("horaFimSabadoNUlinha5");
    
    if (horaInicioSabadoNUlinha5.value == "00:00" && horaFimSabadoNUlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaSabadoNUlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioSabadoNUlinha5.value == "" || horaFimSabadoNUlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaSabadoNUlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaSabadoNUlinha5').style.backgroundColor = "#E5E8E7";
    }
});

$('#conteudoDiaSemanaDomingoNUlinha5 .hora').on('change',function(){
    var horaInicioDomingoNUlinha5 = document.getElementById("horaInicioDomingoNUlinha5");
    var horaFimDomingoNUlinha5 = document.getElementById("horaFimDomingoNUlinha5");
    
    if (horaInicioDomingoNUlinha5.value == "00:00" && horaFimDomingoNUlinha5.value == "00:00"){
    document.querySelector('#conteudoDiaSemanaDomingoNUlinha5').style.backgroundColor = "#ffffff";
    }
    else if (horaInicioDomingoNUlinha5.value == "" || horaFimDomingoNUlinha5.value == ""){
        document.querySelector('#conteudoDiaSemanaDomingoNUlinha5').style.backgroundColor = "#ffffff";
    }
    else {
        document.querySelector('#conteudoDiaSemanaDomingoNUlinha5').style.backgroundColor = "#E5E8E7";
    }
});