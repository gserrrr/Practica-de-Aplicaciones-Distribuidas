<%@page import="perabd.DBActionsUsers"%>
<%
String usuario = request.getParameter("us");
String contrase�a = request.getParameter("pw");

DBActionsUsers dbau = new DBActionsUsers();
int nivel = dbau.getUserAccess(usuario,contrase�a);
out.print(nivel);
if(nivel >= 0){
    session.setAttribute("user", usuario);
    session.setAttribute("pass", contrase�a);
    session.setAttribute("level", nivel);
    response.setStatus(response.SC_MOVED_TEMPORARILY);
    response.setHeader("Location", request.getContextPath());
}else{//si no hay que mirar si se tiene que hacer algo o basta dejarlo asi y funciona
    response.setStatus(response.SC_MOVED_TEMPORARILY);
    response.setHeader("Location", request.getContextPath() + "?err=2");
}
%>
