export default function Resultado(props){
    return(
        <div className='resultado'>
            <input type="text" className="nombre" value={props.name}></input>
            <input type="date" className="birth" value={props.birth.split('T')[0]}></input>
            <input type="text" className="id" value={props.id}></input>
        </div>
    );
}