let nombreDeUsuario = prompt("Ingrese su nombre de usuario");

if ( nombreDeUsuario == "" ) {
    alert("No ingresaste el nombre de usuario")
} else {
    alert("Nombre de usuario ingresado: " + nombreDeUsuario)
}

let userEmail = prompt("Ingrese su correo electrónico");

let confirmUserEmail = prompt("Confirme su correo electrónico");

while ( userEmail != "" && confirmUserEmail != "") 

{if (userEmail == confirmUserEmail) {
    
    alert("El correo a sido guardado con éxito!");break;} 
    else {
       
        alert("Los correos deben de ser iguales");
   
        let userEmail = prompt("Ingrese su correo electrónico");
    
        let confirmUserEmail = prompt("Confirme su correo electrónico");}
}