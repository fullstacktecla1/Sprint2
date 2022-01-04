import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import * as type from './actionType';


function Login(props){
    let dispatch = useDispatch();
    let action = (formValues)=>{
       console.log(formValues);
       dispatch({type:type.INICIO_SESION, data:formValues});
    }
    return(
        <form onSubmit={props.handleSubmit(action)}>
            <label>Usuario
                <Field name="user" component="input" type="text" className="input1"/>
            </label>
            <label>Contraseña                
                <Field name="pass" component="input" type="password"/>
            </label>
            <button type='submit' id='enviar'>Enviar</button>
            <button type='submit' onClick={()=>{dispatch({type:type.CIERRE_SESION});dispatch(reset('loginForm'));}}>Limpiar</button>
        </form>
    );
}
export default reduxForm({form:'loginForm'})(Login);