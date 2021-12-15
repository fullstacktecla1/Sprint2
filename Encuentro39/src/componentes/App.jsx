import React, { useState } from "react";
import Intermedio from "./Intermedio";
import Resultado from './Resultado';
const resultadosState=React.createContext({});
const contextoNombre=React.createContext("Tecla");//Definición global
export default function App(){
    const[resultados,cambiarResultado]=useState([]);
    const[resultadosInicial,cambiarResultadoInicial]=useState([{id: '38d96106bc8ef3d8bd369b99bb6972702c9826d5', name: 'Inicializado', birth: '1990-01-15T05:00:00.000Z'}]);
    //resultadosState=React.createContext({resultados:resultados,cambiarResultado:cambiarResultado});//valor por defecto
    return(
        <div>
            {resultados.map(e=>{return <Resultado id={e.id} name={e.name} birth={e.birth}/>})}
            <resultadosState.Provider value={Math.floor(Math.random() * 2)>0?{resultados:resultados,cambiarResultado:cambiarResultado}:{resultados:resultadosInicial,cambiarResultado:cambiarResultadoInicial}}> 
                {/* <resultadosState.Provider value={valor}/> modifica el valor actual del context */}
                {console.log(resultados)}
                <Intermedio />
            </resultadosState.Provider>
             
        </div>
    )
}

export {resultadosState, contextoNombre}