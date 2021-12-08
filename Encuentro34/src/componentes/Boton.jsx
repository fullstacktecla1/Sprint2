import { useState } from "react";

function Boton(props){
    const [suma,setValue]=useState(props.numero);
    let restar=()=>{
        if(suma > 1)
            setValue(suma-2);
        else
            if(suma>0){
                alert('El valor es 1, se restará una unidad')
                setValue(suma-1);
            }else
                alert('el valor es 0')
    }
    return(
        <div>
            <p>{suma}</p>
            <button onClick={()=>{setValue(suma + 1);}}>+ 1</button>
            <button onClick={restar}>- 2</button>
        </div>
    );
}

export default Boton;