import * as type from '../actionType';
//import {INICIO_SESION, CIERRE_SESION} from '../actionType';

// {
//     type:type.INICIO_SESION,
//     data:data
// }

export default function userReducer(state={},action){
    switch (action.type) {
        case type.INICIO_USUARIO:
            state = action.data;
            console.log("desde reducer", state);
            return state;
        case type.INICIO_USUARIO_COMPLETO:
            state=action.data;
            console.log("desde reducer cierre", state);
            return state;
        default:
            return state
    }
}