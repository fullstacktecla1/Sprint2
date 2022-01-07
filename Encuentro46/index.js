const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());

app.listen(3000,function(){console.log("Servidor iniciado en puerto 3000");});

const secret = "LoQueYoQuieraQueNoSeaFacilDeCopiar";/**No se debe conocer por nadie **/
const usuarioDB={user:"user1",pass:"qQW$%QW$%SDF", rol:1}; // Simulación de usuario recuperado de BD

app.post("/login",(req,res)=>{
    let usuario = req.body;
    if(usuario.user===usuarioDB.user&&usuario.pass===usuarioDB.pass){
        let jwtGenerado = jwt.sign(usuario,secret);
        res.status(200).json({jwt:jwtGenerado});
    }else{
        res.status(401).json({msg:"Usuario o contraseña inválidos"});
    }
});

function recuperarToken(req){
    try{
        return jwt.verify(req.headers.authorization.split(" ")[1],secret);
    }catch(err){
        console.log(err);
        return undefined;
    }
}

function validarToken(req,res,next){
    try {
        if(!recuperarToken(req)){
            res.status(500).json({msg:"Error del sistema, intenta mas tarde"});
        }else{
            next();
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({msg:"Error del sistema, intenta mas tarde"});
    }
    
}
app.get("/home",validarToken,(req,res)=>{
    let {data}=req.body;
    let token = recuperarToken(req);
    res.status(200).json({...token,data,msg:"home"});
});


// /*****API para autenticación *****/
// let usuario = {nombre:"Christian", rol:"1"};
// let jwtGenerado = jwt.sign(usuario,secret);
// console.log("######Token generado######");
// console.log(jwtGenerado);

// /***** APIs para otras funcionalidades ****/
// /* verificación en un Middleware*/
// let verificacion= jwt.verify(jwtGenerado, secret);
// console.log("######Token Verificado######");
// console.log(verificacion);

// console.log("######Token Incorrecto Verificado######");
// // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// let badToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJDaHJpc3RpYW4gWmFwYXRhIiwicm9sIjoidHJhdGFyIGRlIGVuc2VuYXIiLCJpYXQiOjE2NDE1MjE0Mjh9.tvAPrTFpcuIfdj-4zHjDFoHvqN2vDHk-8WRWjsXRgoo";
// // s3KVSjhgq7AjDM377uVHsTEO0s81ygILAFP3xKzbO8Y

// //Verificación con Try | Catch
// try{
//     let verificacionFail=jwt.verify(badToken,secret);
//     console.log(verificacionFail);
// }catch(e){
//     console.log("Token incorrecto");
// }

// //Verificación con CallBack
// jwt.verify(jwtGenerado,secret, 
//     function(err, decoded) {
//         if(!err)
//             console.log("Token correcto", decoded);
//         else
//             console.log("Este es el error: ",err);
//     }
//   );