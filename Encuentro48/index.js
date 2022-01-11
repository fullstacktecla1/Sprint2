
exports.crearUsuario = function(nombre, apellido, edad, mail){
    let usuario ={
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        esMayorEdad: edad>=18,
        mail:mail
    }
    return usuario;
}

exports.buscarUsuario = function(id){
    let usuarioBD = {
        id:1,
        nombre:"Christian",
        apellido: "Zapata",
        edad: 35,
        esMayorEdad: true,
        mail:"chorzavas@hotmail.com"
    }
    if(id===usuarioBD.id){
        return usuarioBD;
    }
}

exports.actualizarUsuario = function(user){
    let usuarioBD={...user, esMayorEdad: user.edad>=18};
    return usuarioBD;
}