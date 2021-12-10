import { useState } from "react";
import Buscador from './Buscador';
import Resultado from './Resultado';

export default function App(){
    const[resultados,cambiarResultado]=useState([]);
    return(
        <div>
            <Buscador estado={{result:resultados,cambio:cambiarResultado}} />
            {resultados.map(e=>{return <Resultado id={e.id} name={e.name} birth={e.birth}/>})}
        </div>
    )
}