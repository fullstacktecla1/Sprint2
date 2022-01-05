import * as type from './actionType';

export const inicioSesion = (data)=>{
    // return {
    //     type:type.INICIO_SESION,
    //     data:data
    // }
    return async (dispatch)=>{
        data={...data,fecha:new Date()}// Esta ejecución de código antes del dispatch me la permite hacer THUNK
        dispatch({
                 type:type.INICIO_SESION,
                 data:data
             })
    }
}
export const inicioUsuario = (data)=>{
    return {
        type:type.INICIO_USUARIO,
        data:data
    }
}