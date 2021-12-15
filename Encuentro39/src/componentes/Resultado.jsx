import { useContext } from 'react';
import {interm2Context} from './Intermedio2';
export default function Resultado(props){
    const contexto=useContext(interm2Context);
    return(
        <div className='resultado'>
            <h3>{contexto}</h3>
            <input type="text" className="nombre" value={props.name}></input>
            <input type="date" className="birth" value={props.birth.split('T')[0]}></input>
            <input type="text" className="id" value={props.id}></input>
        </div>
    );
}