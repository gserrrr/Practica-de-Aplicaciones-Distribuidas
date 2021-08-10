var vacio = '{"nombre":"","fecnac":"","cantpelis":"","bestpeli":""}';

$(document).ready(function () {
    $("input[type=checkbox]").change(function() {
        if( $(this).is(':checked') ) {
            //comprobar si está en caché
            var item = sessionStorage.getItem("g3_"+this.value);
            if(item!=null){//si está: info en el cuadro, pintarChecked()
                ponerInfo(item);
                pintarChecked();
            } else{//si no: hacer peticion- > guardar en caché, poner info en el cuadro y pnitarChecked()
                $("#container").append('<img id="espera" src="../img/espera.svg">');
                $.ajax({url: "http://localhost:8080/ADIIUp1/bdpeliculas?op=infopersona&par="+this.value, //supongo que hay que hacer una función nueva en el servlet que devuelva un json con toda la info
                    success: function (result) {
                        var result_json = JSON.parse(result);
                        sessionStorage.setItem("g3_"+result_json.nombre.replace(' ','_'), result);
                        $("#espera").remove();
                        ponerInfo(result);
                        pintarChecked();
                }});
            }   
                
        } else {
            //quitar info del cuadro
            ponerInfo(vacio);
            pintarChecked()
        }
    });
});

function pintarChecked(){
    var datos = [];
    for(i=1; i<6; i++){
        var check = $("#nombre"+i);
        if(check.is(":checked")){
            var aux = JSON.parse(sessionStorage.getItem("g3_"+check.val()));
            var nuevoitem = {};
            nuevoitem["name"] = aux.nombre;
            nuevoitem["y"] = aux.cantpelis;
            datos.push(nuevoitem);
        }    
    }
    
    console.log(datos);
    
    Highcharts.chart('container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Cantidad de pelis por persona'
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
            data: datos
        }]
    });
}

function ponerInfo(item){
    item = JSON.parse(item);
    $("#nombre").text(item.nombre);
    $("#fecnac").text(item.fecnac);
    $("#cantpelis").text(item.cantpelis);
    $("#bestpeli").text(item.bestpeli);
}