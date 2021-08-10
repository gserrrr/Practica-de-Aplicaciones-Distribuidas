var acum;
var p1;
var p2;
var p3;

$(document).ready(function () {
    acum = 0;
    pintarEspera();
    llegirGrafica1();
    llegirGrafica2();
    llegirGrafica3();
});

function pintarEspera() {
    $('#espera').append('<img src="img/espera.gif"/>');
}

function llegirGrafica1() {
    result = sessionStorage.getItem("r1_01");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantporrating&par=0-4.99",
            success: function (result) {
                sessionStorage.setItem("r1_01", result);
                p1 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p1 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function llegirGrafica2() {
    result = sessionStorage.getItem("r2_01");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantporrating&par=5-7.99",
            success: function (result) {
                sessionStorage.setItem("r2_01", result);
                p2 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p2 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function llegirGrafica3() {
    result = sessionStorage.getItem("r3_01");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantporrating&par=8-10",
            success: function (result) {
                sessionStorage.setItem("r3_01", result);
                p3 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p3 = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function pintarGrafica() {
    if (acum == 3) {
        $('#espera').empty();
        pie();
    }
}

function pie() {
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Edad de las personas por conjuntos'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
                name: 'Edades',
                colorByPoint: true,
                data: [{
                        name: '< 30',
                        y: p1,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'entre 30 y 60',
                        y: p2
                    }, {
                        name: '> 60',
                        y: p3
                    }]
            }]
    });
}