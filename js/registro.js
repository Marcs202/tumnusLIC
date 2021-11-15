//tipos de usuario: clientes
let usuarios = [];
let usAdm={
    nombre:"a",
    correo:"b",
    contra:"aa"
}
usuarios.push(usAdm);
function guardar() {
    //!se selecciona el elemento que contiene el nombre, email y password del html
    let nom =  document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass= document.getElementById("password").value;
    let usuario ={
        nombre: nom,
        correo: email,
        contra: pass
    }
    usuarios.push(usuario);
    try {
        //!Se guardan en el local storage la clave y el valor de la clave
        localStorage.setItem("users", JSON.stringify(usuarios));        
        nom = "";
        email = "";
        pass="";
    }
    catch (e) {
        //Verificar si el límite de almacenamiento no se ha sobrepasado
        if (e >= QUOTA_EXCEEDED_ERR) {
            console.log("Error: Límite para almacenamiento local se ha alcanzado.");
        }
        else {
            console.log("Error: Guardando en el almacenamiento local.");
        }
    }
    alert("Se ha registrado");
}

