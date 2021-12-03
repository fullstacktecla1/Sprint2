

function App(){
    return(
        <div>
            <h1>Hola mundo</h1>
            <button type="button" className="btn btn-danger">Primary</button>
            <Hijo />
        </div>
    );
}

function Hijo(){
    return(
        <div>
            <hr />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="" />
            <Hijo2/>
        </div>
    );
}

var Hijo2 = ()=>{//No le aplica el Hoisting por lo tanto no se puede usar antes
    return(
        <div>
            <h1>Hijo 2</h1>
        </div>
    );
}

let app=document.getElementById("app");
ReactDOM.render(<App/>,app);

////componente como constante
//let contenido="<div><h1>Hola mundo</h1></div>";
//app.innerHTML=contenido;
/*const contenido=<div>
                    <h1>Hola mundo desde const</h1>
                    <button type="button" className="btn btn-danger">Primary</button>
                    <Hijo/>
                </div>;

ReactDOM.render(contenido,app);*/