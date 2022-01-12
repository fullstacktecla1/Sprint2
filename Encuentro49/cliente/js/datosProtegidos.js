async function renderData() {
    const token = localStorage.getItem("token");
    console.log(token);
    const apiCall = await fetch('http://localhost:3000/datos', {
        method: 'get',
        headers: {
            "access-token": `${token}`
        }
    });
    const response = await apiCall.json();

    // pinto la informacion consumida de la API o msg de error segun corresponda
    if (response.mensaje === undefined) {
        contenedor = document.getElementById('datosp');
        response.forEach(element => {
            var p = document.createElement("P");   // Creo un elemento <p>
            p.innerHTML = element.nombre + " ( #" + element.id + " )";    // Inserto texto en elemento <p>
            contenedor.appendChild(p);     // realizo Append de <p> en el div destinado a esa informacion de mi html
        });
    } else {
        contenedor = document.getElementById('contenido');
        contenedor.innerHTML = '<div class="alert alert-danger mt-3" role="alert">PAGINA CON INFORMACION PROTEGIDA:'+response.mensaje+'</div>';
    }
}

renderData();   