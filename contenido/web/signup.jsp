<%@page import="perabd.DBActionsUsers"%>
<%
String usuario = request.getParameter("us");
String contraseña = request.getParameter("pw");
System.out.print(usuario);


DBActionsUsers dbau = new DBActionsUsers();
boolean existe = dbau.checkUser(usuario);

if(existe){
    //te redirige xq significa que ya existe la cuenta
    response.setStatus(response.SC_MOVED_TEMPORARILY);
    response.setHeader("Location", request.getContextPath() + "?err=1");
}else{
    dbau.createUser(usuario, contraseña);
    session.setAttribute("user", usuario);
    session.setAttribute("pass", contraseña);
    session.setAttribute("level", 1);
    response.setStatus(response.SC_MOVED_TEMPORARILY);
    response.setHeader("Location", request.getContextPath());
}


%>