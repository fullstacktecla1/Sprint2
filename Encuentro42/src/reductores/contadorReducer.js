function contadorReducer(estado=0, accion){
    switch (accion.type) {
        case 'SUMAR':
            return estado + 1;
        case 'RESTAR':
            return estado - 1;
        case 'MULTIPLICAR':
            return estado * accion.multiplicando;
        default:
            return estado;
    }
}

export default contadorReducer;