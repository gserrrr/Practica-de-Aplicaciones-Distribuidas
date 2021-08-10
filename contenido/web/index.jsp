<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.3.6/proj4.js"></script>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        
        
        <script src="http://code.highcharts.com/maps/modules/map.js"></script>
        <script src="https://code.highcharts.com/maps/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/maps/modules/offline-exporting.js"></script>
        <script src="https://code.highcharts.com/mapdata/countries/es/es-all.js"></script>
        
        <link rel="stylesheet" href="CSS/contenedores_index.css">
        <script src="js/container1.js" type="text/javascript" charset="UTF-8"></script>
        <script src="js/container2.js" type="text/javascript" charset="UTF-8"></script>
        <script src="js/container3.js" type="text/javascript" charset="UTF-8"></script>
        
        
        
    </head>
    <body>
        <%@include file="capcalera.jsp" %>
        <div id="goPrivada" class="mr-1 mt-1">
            <a  href="./privat/privada1.jsp">
                <img src="img/goPrivada.svg">
                <br>
                <p>Parte privada</p>
            </a>
        </div>
        <div id="mitad_arriba">
            <div id="container1" class="container_arriba"><img id="espera1" src="img/espera.svg"></div>
            <div id="container2" class="container_arriba"><img id="espera2" src="img/espera.svg"></div>
        </div>
        <div id="espera3"><img id="espera33" src="img/espera.svg"></div>
        
        <div id="container3"></div>
        
    </body>
</html>
