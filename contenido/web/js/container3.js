var capitales = "Santiago de compostela-Oviedo-Santander-Vitoria-Pamplona-Barcelona-Zaragoza-Logroño-Valladolid-Madrid-Mérida-Toledo-Valencia-Sevilla-Murcia-Palma de mallorca-Las palmas de gran canaria";
$(document).ready(function () {
    llegirMapa();
});

function llegirMapa() {
    result = sessionStorage.getItem("g3");
    if (result == null) {
        $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=gpspoblacion&par="+capitales,
            success: function (result) {
                sessionStorage.setItem("g3", result);
                $("#espera3").remove();
                mapa();
            }});
    } else {
        $("#espera3").remove();
        mapa();
    }
}

function mapa(){
    var datos = sessionStorage.getItem("g3");
    var datosBuenardos = JSON.parse(datos);
    Highcharts.mapChart('container3', {

        chart: {
            map: 'countries/es/es-all'
        },

        title: {
            text: 'Capitales de las comunidades autónomas'
        },

        mapNavigation: {
            enabled: true
        },

        tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}'
        },

        series: [{
            // Use the gb-all map with no data as a basemap
            name: 'Basemap',
            borderColor: '#A0A0A0',
            nullColor: 'rgba(200, 200, 200, 0.3)',
            showInLegend: false
        }, {
            name: 'Separators',
            type: 'mapline',
            nullColor: '#707070',
            showInLegend: false,
            enableMouseTracking: false
        }, {
            // Specify points using lat/lon
            type: 'mappoint',
            name: 'Cities',
            color: Highcharts.getOptions().colors[1],
            data: datosBuenardos
        }]
    });
}


