async function signIn() {
    event.preventDefault();
    let usuario = document.getElementById('user').value;
    let contrasena = document.getElementById('pass').value;

    try {
      const res = await fetch(`http://localhost:3000/autenticar`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({usuario: usuario, contrasena: contrasena}),
        mode: 'cors' 
      });

      const respuesta = await res.json(); // tomo el JSON de la respuesta http

      var element = document.getElementById("mensajes");
    
      if (respuesta.token){
        element.innerHTML = '<div class="alert alert-success" role="alert">'+respuesta.mensaje+'</div>';
        localStorage.setItem('token', respuesta.token);
      } else {
        element.innerHTML = '<div class="alert alert-danger" role="alert">'+respuesta.mensaje+'</div>';
      }
    } catch(e) {
      console.error(e);   
    }
}