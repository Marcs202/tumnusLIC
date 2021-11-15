function obtenerListaUsuarios() {
    
    console.log("Restaurando arreglo de datos desde localStorage.");
    let usuarios= JSON.parse(localStorage.getItem("users"));
    for(var i=0; i<usuarios.length; i++){
        var personObject = usuarios[i];
    }
    return usuarios;
}
function validarCredenciales(pCorreo,pContrasenna){
    let listaUsuarios=obtenerListaUsuarios();
    let bAcceso=false;
    for (let i = 0; i < listaUsuarios.length; i++) {
        if(listaUsuarios[i].correo=pCorreo && listaUsuarios[i].contra==pContrasenna){
            bAcceso=true;
            console.log("correo obtenido "+listaUsuarios[i].correo);
            console.log("Correo ingresado a la funcion"+pCorreo);
        }
    }
    return bAcceso;
}

function iniciarSesion(){
   let sCorreo;
    let sContrasenna;
    sCorreo=document.getElementById("corre").value;
    sContrasenna=document.getElementById("conn").value;
    bAcceso=validarCredenciales(sCorreo,sContrasenna);
    if (bAcceso) {
        alert("Bienvenido");    
        
    }else{
        alert("Usuario no registrado");
    }

}
 
 

