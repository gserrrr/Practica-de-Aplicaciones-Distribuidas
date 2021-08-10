$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}

function registrarse(){
    var user = $("#usR").val();
    var pass = $("#pwR").val();
    var cpass = $("#pwR2").val();
    //Comprobar longitud de usuario y contraseña
    if(cpass === pass){
        console.log(user);
        console.log(pass);
        console.log(cpass);
        $("#formRegistro").submit();
    }else{
        $("#contras").prepend('<p class="alerta alert alert-warning mt-3">Las contraseñas no coinciden</p>');
    }
}

function cancelarRegistro(){
    $(".alerta").remove();
    $("#usR").val("");
    $("#pwR").val("");
    $("#pwR2").val("");
}

function cancelarLogin(){
    $("#usL").val("");
    $("#pwL").val("");
}

$(document).ready(function () {
    var err = $.urlParam('err');
    if(err){
        switch (parseInt(err)){
            case 1: //Intentar crear un usuario que ya existe
                $("#modalRegistro").modal('show');
                $("#usuarioRegistro").prepend('<p class="alerta alert alert-danger mt-3">Este nombre de usuario ya existe</p>');
                break;
            case 2: //Intentar entrar como un usuario que no existe
                $("#modalInicio").modal('show');
                $("#usuarioLogin").prepend('<p class="alerta alert alert-danger mt-3">Nombre de usuario o contraseña incorrectos</p>');
                break;
        }
        //Borramos el error de la url, así al recargar la página no saldrá el error de nuevo
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});


