let chai = require("chai");
let assert = chai.assert;
let user = require("../");

const usuario = {
    id:1,
    nombre:"Christian",
    apellido: "Zapata",
    edad: 35,
    esMayorEdad: true,
    mail:"chorzavas@hotmail.com"
}

describe("CRUD User",()=>{
    describe("Usuario creado",()=>{
        it("Objeto creado", ()=>{
            let res = user.crearUsuario(usuario.nombre,usuario.apellido,usuario.edad,usuario.mail);
            assert.isDefined(res);
        });


        it("Validación de tipo de dato resultante: ",()=>{
            let res = user.crearUsuario(usuario.nombre,usuario.apellido,usuario.edad,usuario.mail);
            assert.typeOf(res, "object");
        });

        
    });

    describe("Read User",()=>{
        it("Encontrar un usario específico con ID válido",()=>{
            let res = user.buscarUsuario(1);
            assert.containsAllKeys(res, ['nombre','apellido','edad','esMayorEdad','mail']);
        });
        
    })
    describe("Update User",()=>{
        it("Validar id el usuario actualizado",()=>{
            let res = user.actualizarUsuario(usuario);
            assert.equal(usuario.id,res.id);
        });
        it("Validar la información del usuario actualizado",()=>{
            let res = user.actualizarUsuario(usuario);
            assert.deepEqual(usuario,res);
        });
    })
    describe("Delete User",()=>{
    
    })
})