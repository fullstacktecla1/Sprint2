import { combineReducers, createStore } from 'redux';
import loginReducer from '../reducers/loginReducer';
import { reducer as formReducer } from 'redux-form';//Combinar como reducer el manejador de redux-form para manejar los estados

const store = createStore(
        combineReducers({login:loginReducer, form:formReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
export default store;