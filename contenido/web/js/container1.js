var acum;
var p1Nombre = 'death';
var p1Cant;
var p2Nombre = 'sea';
var p2Cant;
var p3Nombre = 'train';
var p3Cant;
var p4Nombre = 'house';
var p4Cant;
var p5Nombre = 'night';
var p5Cant;

$(document).ready(function () {
    acum = 0;
    llegirGrafica1();
    llegirGrafica2();
    llegirGrafica3();
    llegirGrafica4();
    llegirGrafica5();
});

function llegirGrafica1() {
    result = sessionStorage.getItem("g1_p01");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantipelisporcadena&par="+p1Nombre,
            success: function (result) {
                sessionStorage.setItem("g1_p01", result);
                p1Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p1Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function llegirGrafica2() {
    result = sessionStorage.getItem("g1_p02");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantipelisporcadena&par="+p2Nombre,
            success: function (result) {
                sessionStorage.setItem("g1_p02", result);
                p2Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p2Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function llegirGrafica3() {
    result = sessionStorage.getItem("g1_p03");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantipelisporcadena&par="+p3Nombre,
            success: function (result) {
                sessionStorage.setItem("g1_p03", result);
                p3Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p3Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function llegirGrafica4() {
    result = sessionStorage.getItem("g1_p04");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantipelisporcadena&par="+p4Nombre,
            success: function (result) {
                sessionStorage.setItem("g1_p04", result);
                p4Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p4Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function llegirGrafica5() {
    result = sessionStorage.getItem("g1_p05");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=cantipelisporcadena&par="+p5Nombre,
            success: function (result) {
                sessionStorage.setItem("g1_p05", result);
                p5Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
                acum++;
                pintarGrafica();
            }});
    } else {
        p5Cant = parseInt(result.substring(result.indexOf(":") + 1, result.indexOf("}")));
        acum++;
        pintarGrafica();
    }
}

function pintarGrafica() {
    if (acum == 5) {
        $("#espera1").remove();
        grafica();
    }
}

function grafica() {
    Highcharts.chart('container1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'column'
        },
        title: {
            text: 'Cantidad de películas que contienen x palabra'
        },
        tooltip: {
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:1f}</b></td></tr>'
        },
        plotOptions: {
            column: {
            pointPadding: 0.2,
            borderWidth: 0
            }
        },
        xAxis:{
            categories:[""]
        },
        series: [{
                        name: p1Nombre,
                        data: [p1Cant],
                        color: '#61EB84'
                    }, {
                        name: p2Nombre,
                        data: [p2Cant],
                        color: '#69A6F5'
                    }, {
                        name: p3Nombre,
                        data: [p3Cant],
                        color: '#BB7DE0'
                    }, {
                        name: p4Nombre,
                        data: [p4Cant],
                        color: '#F5675C'
                    }, {
                        name: p5Nombre,
                        data: [p5Cant],
                        color: '#EBCD71'
                    }]
            
    });
}