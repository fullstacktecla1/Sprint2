import { useState } from "react";

function Boton(props){
    const [suma,setValue]=useState(props.numero);
    let sumar=()=>{
        setValue(suma + 1);
    }
    return(
        <div>
            <p>{suma}</p>
            <button onClick={sumar}>+ 1</button>
        </div>
    );
}

export default Boton;