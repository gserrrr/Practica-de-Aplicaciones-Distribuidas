<%-- 
    Document   : privada1
    Created on : 18-nov-2020, 11:35:36
    Author     : dmiltim
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        
        <link rel="stylesheet" href="../CSS/parte_privada.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="../js/container_priv.js" type="text/javascript" charset="UTF-8"></script>
    </head>
    <body>
        <%@include file="../capcalera.jsp" %>
        
        <div id="goPublica" class="ml-1 mt-1">
            <a  href="../index.jsp">
                <img src="../img/goPublica.svg">
                <br>
                <p>Parte pública</p>
            </a>
        </div>
        
        <div id="parte_arriba">
            <div id="checkboxes" class=" divs_arriba">
                <input type="checkbox" id="nombre1" class="form-check-input " value="Tom_Hanks">
                <label for="nombre1" class="form-check-label">Tom Hanks</label><br>
                
                <input type="checkbox" id="nombre2" class="form-check-input" value="Brad_Pitt">
                <label for="nombre2" class="form-check-label">Brad Pitt</label><br>
                
                <input type="checkbox" id="nombre3" class="form-check-input" value="Leonardo_DiCaprio">
                <label for="nombre3" class="form-check-label">Leonardo DiCaprio</label><br>
                
                <input type="checkbox" id="nombre4" class="form-check-input" value="Tom_Cruise">
                <label for="nombre4" class="form-check-label">Tom Cruise</label><br>
                
                <input type="checkbox" id="nombre5" class="form-check-input" value="Julia_Roberts">
                <label for="nombre5" class="form-check-label">Julia Roberts</label><br>
            </div>
            <div class="divs_arriba" id="datos">
                <ul class="list-group">
                    <li>
                        <p class="izq">Nombre:</p>
                        <p id="nombre"></p>
                    </li>
                    <li>
                        <p class="izq">Fecha de nacimiento:</p>
                        <p id="fecnac"></p>
                    </li>
                    <li>
                        <p class="izq">Cantidad de pelis en las que ha perticipado:</p>
                        <p id="cantpelis"></p>
                    </li>
                    <li>
                        <p class="izq">Pelicula mejor valorada:</p>
                        <p id="bestpeli"></p>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div id="container"></div>
    </body>
</html>
