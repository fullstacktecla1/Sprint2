const URL_API='http://localhost:3000/';
const api_key='Esto es lo que va como identificador del consumidor';
let txtId=document.getElementById('txt_id');
let btnEnviar=document.getElementById('btn_enviar');
let content = document.getElementById('content');

//####### CONSULTAR  ########
btnEnviar.addEventListener('click',(e)=>{
    if(txtId.value=='')
        getData(URL_API+'users/users').then((res)=>mostrarElementos(res));
    else{
        postData(URL_API+'users/user', { api_key: api_key, id:txtId.value })
        .then((res)=>mostrarElementos(res));
    }
});

function mostrarElementos(resultado){
    console.log(resultado); // JSON data parsed by `data.json()` call
    content.innerHTML='';
    resultado.data.forEach(el => {
        let div=document.createElement('div');
        div.id='div'+el.id;
        div.innerHTML+=`<div>
                                <input type="text" class="nombre" value="${el.name}">
                                <input type="date" class="birth" value="${el.birth.split('T')[0]}">
                                <input type="hidden" class="id" value="${el.id}">
                            </div>`;
        let btnUpdate=document.createElement('input');
        btnUpdate.type="submit";
        btnUpdate.id=el.id;
        btnUpdate.addEventListener('click',(e)=>{update(e)});
        div.appendChild(btnUpdate);
        content.appendChild(div);
    });
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
//######### ACTUALIZAR ########
function update(btn){
    console.log(btn.target);
    let nombre=document.querySelector('#div'+btn.target.id).querySelector('.nombre').value;
    let fecha=document.querySelector('#div'+btn.target.id).querySelector('.birth').value;;
    let id=btn.target.id;
    putData(URL_API+'users/user', { api_key: api_key, id:id, name:nombre, birth:fecha })
    .then(res=>{
        alert(res.msg);
        console.log(res);
    });
}

async function putData(url, data){
    const response = await fetch(url, {
        method: 'PUT', 
        mode: 'cors', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return response.json();
}