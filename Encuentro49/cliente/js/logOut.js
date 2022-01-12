
function logOut () {
    // elimino el token de localStorage
    localStorage.removeItem('token');

    //reenvio a pagina de login
    window.location.href = "login.html";
}