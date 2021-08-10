<%
    session.removeAttribute("user");
    session.removeAttribute("pass");
    session.removeAttribute("level");
    response.setStatus(response.SC_MOVED_TEMPORARILY);
    response.setHeader("Location", request.getContextPath());
%>
