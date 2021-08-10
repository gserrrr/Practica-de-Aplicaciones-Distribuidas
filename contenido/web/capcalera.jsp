<%-- 
    Document   : capcalera
    Created on : 19-oct-2020, 22:12:32
    Author     : mascport
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
              integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
        <script src="js/signinup.js" type="text/javascript" charset="UTF-8"></script>
    </head>
    <body>
        <header>
            <nav id="nav" class="navbar d-flex justify-content-end navbar-expand-md navbar-light bg-dark text-right">
        <%
            String s = request.getRequestURI();
            String servletlloc = request.getContextPath();
            String user = (String) session.getAttribute("user");
            String pass = (String) session.getAttribute("pass");
            boolean privada = false;
            if (s.startsWith(servletlloc + "/privat/")) {
                privada = true;
                if ((user == null) || (pass == null)) {
                    out.println(s + "    " + servletlloc);
                    response.setStatus(response.SC_MOVED_TEMPORARILY);
                    response.setHeader("Location", request.getContextPath());
                } else {
                    int level = (Integer) session.getAttribute("level");
                    if (level < 1) {
                        response.setStatus(response.SC_MOVED_TEMPORARILY);
                        response.setHeader("Location", request.getContextPath());
                    }
                }
            }
            String code = "";
            if((user == null) || (pass == null)){
                code += "<div><button id='butInicio' type='button' class='nav-item btn btn-lg btn-danger mx-1'  data-toggle='modal' data-target='#modalInicio'> Iniciar Sesión </button></div>";
                code += "<div><button id='butRegistro' type='button' class='nav-item btn btn-lg btn-danger ml-1'  data-toggle='modal' data-target='#modalRegistro'> Registrarse </button></div>";

            }else{
                code += "<div><p class='h4 text-light mr-4 pt-2'>"+user+"</p></div>";
                if(privada){
                    code += "<div><form action='../logout.jsp' method='get'><button class='nav-item btn btn-lg btn-danger ml-1'>Cerrar</button></form></div>";
                }else{
                    code += "<div><form action='logout.jsp' method='get'><button class='nav-item btn btn-lg btn-danger ml-1'>Cerrar</button></form></div>";
                }
            }
            out.print(code);
        %>


                <!--<div><button id='butInicio' type='button' class='nav-item btn btn-lg btn-danger mx-1"  data-toggle="modal" data-target="#modalInicio"> Iniciar Sesión </button></div>
                <div><button id="butRegistro" type="button" class="nav-item btn btn-lg btn-danger ml-1"  data-toggle="modal" data-target="#modalRegistro"> Registrarse </button></div>
                -->
            </nav>
            <!-- Modal inicio de sesión -->
            <div class="modal fade" id="modalInicio">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <form method="get" action="login.jsp" accept-charset=utf-8>
                            <div class="modal-header">
                                <h4 class="modal-title">Inicio de sesión</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>


                            <div class="justify-content-between modal-body form-group">
                                <div id ="usuarioLogin">
                                    <input type="text" class="form-control md-2" placeholder="Usuario" maxlength='20' name="us" required>
                                </div>
                                <input type="password" class="form-control mt-3" placeholder ="Contraseña" maxlength='20' name="pw" required>
                            </div>

                            <div class="modal-footer">
                                <button type="submit" id="confCompra" class="btn btn-secondary">Entrar</button>
                                <button type="button" class="btn btn-light border border-secondary" data-dismiss="modal" onclick="cancelarLogin()">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Modal registro -->
            <div class="modal fade" id="modalRegistro">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <form id="formRegistro" method="get" action="signup.jsp">
                            <div class="modal-header">
                                <h4 class="modal-title">Registrate</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>


                            <div class="justify-content-between modal-body form-group">
                                <div id="usuarioRegistro">
                                    <input type="text" class="form-control md-2" placeholder="Usuario" name="us" id="usR" maxlength='20' required>
                                </div>
                                <div id="contras">
                                    <input type="password" class="form-control mt-3" placeholder ="Contraseña" maxlength='20' name="pw" id="pwR" required>
                                    <input type="password" class="form-control mt-3" placeholder ="Confirma la contraseña" maxlength='20' id="pwR2" required>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" id="confCompra" class="btn btn-secondary" onclick="registrarse()">Entrar</button>
                                <button type="button" id="butCancelReg" class="btn btn-light border border-secondary" data-dismiss="modal" onclick="cancelarRegistro()">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </header>

    </body>
</html>
