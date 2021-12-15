import Buscador from './Buscador';
import React from "react";
export const interm2Context=React.createContext("Contexto creado en Intermedio2");
export default function Intermedio(){
    return(
        <div>
            <Buscador/>
        </div>
    )
}