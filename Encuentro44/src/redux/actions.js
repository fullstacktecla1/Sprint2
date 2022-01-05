import * as type from './actionType';

export const inicioSesion = (data)=>{
    // return {
    //     type:type.INICIO_SESION,
    //     data:data
    // }
    return async (dispatch)=>{
        data={...data,fecha:new Date()}// Esta ejecución de código antes del dispatch me la permite hacer THUNK
        console.log(data.user==="hola");
        if(data.user==="hola"){
            dispatch({
                 type:type.INICIO_SESION,
                 data:data
             })
        }else{
            data={...data,basic:true};
            dispatch({
                type:type.INICIO_USUARIO_COMPLETO,
                data:data
            })
        }
    }
}
export const inicioUsuario = (data)=>{
    return {
        type:type.INICIO_USUARIO,
        data:data
    }
}