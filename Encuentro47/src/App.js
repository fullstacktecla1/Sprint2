import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props) {

        super(props);

        // Defino los estados locales 
        this.state = {
            campo: {},
            error: {},
            enviado: false 
        } 

    }

    // Valido los campos del formulario 
    validarFormulario() {
        let campo = this.state.campo;
        let error = {};
        let formularioValido = true;

        // Nombres y Apellidos 
        if (!campo["nya"]) {
            formularioValido = false;
            error["nya"] = "Por favor, ingresa tus Nombres y Apellidos.";
        }

        // Email
        if (!campo["email"]) {
            formularioValido = false;
            error["email"] = "Por favor, ingresa tu correo.";
        }

        // Validamos si el formato del Email es correcto 
        if (typeof campo["email"] !== "undefined") {
            let posicionArroba = campo["email"].lastIndexOf('@');
            let posicionPunto = campo["email"].lastIndexOf('.');

            if (!(posicionArroba < posicionPunto && posicionArroba > 0 && campo["email"].indexOf('@@') === -1 && posicionPunto > 2 && (campo["email"].length - posicionPunto) > 2)) {
                formularioValido = false;
                error["email"] = "Por favor, ingresa un correo válido.";
            }


        }

        // Asunto
        if (!campo["asunto"]) {
            formularioValido = false;
            error["asunto"] = "Por favor, ingresa un Asunto.";
        }else{
        // Asunto tamano
            if (campo["asunto"].length<10) {
                formularioValido = false;
                error["asunto"] = "Por favor, ingresa un Asunto con mas de 10 caracteres.";
            }
        }

        // Área o Departamento
        if (!campo["area"]) {
            formularioValido = false;
            error["area"] = "Por favor, selecciona un área o Departamento.";
        }

        // Archivo 
        if (!campo["archivo"]) {
            formularioValido = false;
            error["archivo"] = "Por favor, selecciona un Archivo.";
        } 

        // Mensaje
        if (!campo["mensaje"]) {
            formularioValido = false;
            error["mensaje"] = "Por favor, ingresa tu Mensaje.";
        }

        // Seteo el estado de error 
        this.setState({
            error: error
        });
        
        return formularioValido;
    } 

    // Una vez que los campos del formulario han sido llenado correctamente 
    // Mostramos un mensaje al usuario diciendo: 'Mensaje Enviado Satisfactoriamente !'
    enviarFormulario(e) {
        e.preventDefault();

        // Si la validación de los campos del formulario ha sido realizada 
        if (this.validarFormulario()) {            

            // Cambio el estado de 'enviado' a 'true'
            this.setState({enviado: true});

            // Muestro el mensaje que se encuentra en la función mensajeEnviado()
            return this.mensajeEnviado();
        } 

    } 

    // Función para mostrar un mensaje al usuario 
    mensajeEnviado(state) { 

        // la variable enviado por defecto esta en 'false' pero cuando se
        // termina de validar los datos del formulario, la variable enviado
        // cambia a 'true' 
        const enviado = this.state.enviado;
        /***** console.log(enviado); *****/

        // Si el valor de la variable enviado es 'true' pues mostramos el mensaje 
        if (enviado) {

            return {
                __html: '<div class="alert alert-success mt-3" role="alert">Mensaje Enviado Satisfactoriamente !</div>'
            };

        }
    }; 

    // Detectamos cuando un campo del formulario es llenado y por ende cambia de estado 
    detectarCambio(field, e) {

        let campo = this.state.campo;
        campo[field] = e.target.value;

        // Cambio de estado de campo 
        this.setState({
            campo
        });
        console.log(this.state.campo);
    } 

    
    // Cuando el componente ha sido Montado 
    componentDidMount() {

        // 

    }

    // Cuando el componente ha sido Desmontado  
    componentWillUnmount() {

        // 

    }
    
    // Renderizamos el formulario 
    render(){         

        return (

            <div className="App">
                <div className="container mt-5 mb-5">
                    <div className="col-md-12">

                        <h1>FORMULARIO DE INSCRIPCIÓN</h1>

                        <form onSubmit={this.enviarFormulario.bind(this)}>

                            <div className="form-group">
                                <label className="negrita2" htmlFor="nya">Nombres y Apellidos</label>
                                <input required={true} maxlength="5" type="text" className="form-control" id="nya" aria-describedby="nyaHelp" onChange={this.detectarCambio.bind(this, "nya" )} value={this.state.campo["nya"] || ''} />
                                <span style={{color: "red"}}>{this.state.error["nya"]}</span>
                            </div>

                            <div className="form-group">
                                <label className="negrita2" htmlFor="email">Email</label>
                                <input type="text" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.detectarCambio.bind(this, "email" )} value={this.state.campo["email"]  || ''} />
                                <small id="emailHelp" className="form-text text-muted">Ejemplo: correo@email.com </small>
                                <span style={{color: "red"}}>{this.state.error["email"]}</span>
                            </div> 

                            <div className="form-group">
                                <label className="negrita2" htmlFor="nya">Asunto</label>
                                <input  maxlength="10" type="text" className="form-control" id="asunto" aria-describedby="nyaHelp" onChange={this.detectarCambio.bind(this, "asunto" )} value={this.state.campo["asunto"]  || ''} />
                                <span style={{color: "red"}}>{this.state.error["asunto"]}</span>
                            </div>

                            <div className="form-group">
                                <label className="negrita2" htmlFor="area">Carrera</label>
                                <select className="form-control" id="area" onChange={this.detectarCambio.bind(this, "area" )} value={this.state.campo["area"] || ''}>
                                    <option value="">Seleccione:</option>
                                    <option value="be">Desarrollador Backend</option>
                                    <option value="fe">Desarrollador Frontend</option>
                                    <option value="ds">Data Science</option>
                                    <option value="fs">Fullstack Developer</option>
                                </select>
                                <span style={{color: "red"}}>{this.state.error["area"]}</span>
                            </div>

                            <div className="form-group">
                                <label className="negrita2" htmlFor="archivo">Adjuntar Archivo (imagen de perfil)</label>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="archivo" onChange={this.detectarCambio.bind(this, "archivo" )} value={this.state.campo["archivo"] || ''} />
                                    <label className="custom-file-label" htmlFor="customFile">Seleccionar...</label>
                                    <span style={{color: "red"}}>{this.state.error["archivo"]}</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="negrita2" htmlFor="mensaje">Mensaje</label>
                                <textarea className="form-control" id="mensaje" rows="3" onChange={this.detectarCambio.bind(this, "mensaje" )} value={this.state.campo["mensaje"] || ''}></textarea>
                                <span style={{color: "red"}}>{this.state.error["mensaje"]}</span>
                            </div>

                            <button type="submit" className="btn btn-primary">Aceptar</button>                            

                        </form>

                       {/* Si el formulario no ha sido validado aún, no mostramos el mensaje */}
                       {/* Y cuando el formulario es validado, pues mostramos el mensaje */}
                       <div className="msgok" dangerouslySetInnerHTML={this.mensajeEnviado()} /> 

                    </div>
                </div>
            </div>

        )
        
    };

}

export default App;
