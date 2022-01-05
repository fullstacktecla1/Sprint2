import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';

const reducers= combineReducers({usuarioLogueado:loginReducer, informacionUsuario:userReducer, form:formReducer})
const store = createStore(
    reducers,
    compose(
            applyMiddleware(reduxThunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
export default store;



