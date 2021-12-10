import { useState } from "react";

export default function Buscador(props){
    const[txtId,cambiarValorId]=useState("");
    let cambiarValorDelCampoDeTexto = (evento)=>{
        let valor = evento.target.value;
        // console.log('Elemento: ',evento.target);
        // console.log('Tipo: ',evento.target.type);
        // console.log('Id: ',evento.target.id);
        // console.log('Valor: ',evento.target.value);
        cambiarValorId(valor);
    }

    

    let buscarId = ()=>{
        const URL_API='http://localhost:3001/';
        const api_key='Esto es lo que va como identificador del consumidor';
    
        if(txtId==='')
            getData(URL_API+'users/users').then((res)=>{ props.estado.cambio(res.data);console.log(props.estado.result);});
        else{
            postData(URL_API+'users/user', { api_key: api_key, id:txtId })
            .then((res)=>{ props.estado.cambio(res.data);console.log(props.estado.result);});
        }
    }

    return(
        <div>
            <label htmlFor="txt_id">Ingrese el id del usuario</label>
            <input type="text" id="txt_id" value={txtId} onChange={cambiarValorDelCampoDeTexto}></input>
            <input type="submit" id="btn_enviar" onClick={buscarId}></input>
        </div>
    );   
}

// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
// Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
    
async function getData(url = '', data = {}) {
    const response = await fetch(url);
    return response.json();
}