import * as type from '../actionType';
//import {INICIO_SESION, CIERRE_SESION} from '../actionType';

export default function loginReducer(state={},action){
    switch (action.type) {
        case type.INICIO_SESION:
            state = action.data;
            console.log("desde reducer", state);
            return state;
        case type.CIERRE_SESION:
            state={};
            console.log("desde reducer cierre", state);
            return {};
        default:
            return state
    }
}