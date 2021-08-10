var c2_acum;
var c2_p1Nombre = '0-2';
var c2_p1Cant;
var c2_p2Nombre = '2-4';
var c2_p2Cant;
var c2_p3Nombre = '4-6';
var c2_p3Cant;
var c2_p4Nombre = '6-8';
var c2_p4Cant;
var c2_p5Nombre = '8-10.1';
var c2_p5Cant;

$(document).ready(function () {
    c2_acum = 0;
    llegirGrafica21();
    llegirGrafica22();
    llegirGrafica23();
    llegirGrafica24();
    llegirGrafica25();
});

function llegirGrafica21() {
    result = sessionStorage.getItem("g2_p01");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantporrating&par="+c2_p1Nombre,
            success: function (result) {
                sessionStorage.setItem("g2_p01", result);
                c2_p1Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                c2_acum++;
                pintarGrafica2();
            }});
    } else {
        c2_p1Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        c2_acum++;
        pintarGrafica2();
    }
}

function llegirGrafica22() {
    result = sessionStorage.getItem("g2_p02");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantporrating&par="+c2_p2Nombre,
            success: function (result) {
                sessionStorage.setItem("g2_p02", result);
                c2_p2Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                c2_acum++;
                pintarGrafica2();
            }});
    } else {
        c2_p2Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        c2_acum++;
        pintarGrafica2();
    }
}

function llegirGrafica23() {
    result = sessionStorage.getItem("g2_p03");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantporrating&par="+c2_p3Nombre,
            success: function (result) {
                sessionStorage.setItem("g2_p03", result);
                c2_p3Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                c2_acum++;
                pintarGrafica2();
            }});
    } else {
        c2_p3Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        c2_acum++;
        pintarGrafica2();
    }
}

function llegirGrafica24() {
    result = sessionStorage.getItem("g2_p04");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantporrating&par="+c2_p4Nombre,
            success: function (result) {
                sessionStorage.setItem("g2_p04", result);
                c2_p4Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                c2_acum++;
                pintarGrafica2();
            }});
    } else {
        c2_p4Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        c2_acum++;
        pintarGrafica2();
    }
}

function llegirGrafica25() {
    result = sessionStorage.getItem("g2_p05");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantporrating&par="+c2_p5Nombre,
            success: function (result) {
                sessionStorage.setItem("g2_p05", result);
                c2_p5Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                c2_acum++;
                pintarGrafica2();
            }});
    } else {
        c2_p5Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        c2_acum++;
        pintarGrafica2();
    }
}

function pintarGrafica2() {
    if (c2_acum == 5) {
        $("#espera2").remove();
        grafica2();
    }
}

function grafica2() {
    Highcharts.chart('container2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Cantidad de pelis por rating'
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: '',
            colorByPoint: true,
            data: [{
                name: c2_p1Nombre,
                y: c2_p1Cant
            }, {
                name: c2_p2Nombre,
                y: c2_p2Cant
            }, {
                name: c2_p3Nombre,
                y: c2_p3Cant
            }, {
                name: c2_p4Nombre,
                y: c2_p4Cant
            }, {
                name: c2_p5Nombre,
                y: c2_p5Cant
            }]
        }]
    });
}