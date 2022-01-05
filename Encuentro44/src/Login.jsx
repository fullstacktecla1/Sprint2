import { useDispatch, useSelector } from "react-redux";
import {inicioSesion, inicioUsuario} from './redux/actions'
import { Field, reduxForm, reset } from 'redux-form';
//export default function Login(props){
function Login(props){
    let dispatch=useDispatch();
    //dispatch(inicioSesion(["no logueado"]));
    dispatch(inicioUsuario({nombre:"Christian", rol:"tratar de enseñar"}))
    let action = (formValues)=>{
        dispatch(inicioSesion(formValues));
     }
    return(
        <form onSubmit={props.handleSubmit(action)}>
            <label>{useSelector(state=>state.informacionUsuario.nombre)}
                <Field name="user" component="input" type="text" className="input1"/>
                {/* <input type="text" /> */}
            </label>
            <label>Contraseña                
                <Field name="pass" component="input" type="password"/>
                {/* <input type="text" /> */}
            </label>
            <button type='submit' id='enviar'>Enviar</button>
            <button type='submit' onClick={()=>{dispatch(reset('loginForm'));}}>Limpiar</button>
        </form>
    );
}
export default reduxForm({form:'loginForm'})(Login);

// let a = state=>state.usuarioLogueado;

// let a = (state)=>{
//     return state.usuarioLogueado;
// }