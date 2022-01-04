import * as type from '../actionType';
export default function loginReducer(state=[],action){
    switch (action.type) {
        case type.INICIO_SESION:
            console.log("desde reducer", action.data);
            return [...state,action.data];
        case type.CIERRE_SESION:
            return [];
        default:
            return state
    }
}