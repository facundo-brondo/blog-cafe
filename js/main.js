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
   
         userEmail = prompt("Ingrese su correo electrónico");
    
         confirmUserEmail = prompt("Confirme su correo electrónico");}
}


class Curso { 
    constructor(producto, precio, cantidad) {
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad,
        this.envio = 0,
        this.subTotal = 0,
        this.total = 0
    }
    calcularSubTotal() {
        this.subTotal = this.precio * this.cantidad;
    }
    calcularEnvio() {
        if (this.subTotal >=5000) {
            this.envio = 0;
        } else {
            this.envio =700;
        }
    }
    calcularIva() {
        return this.subTotal * 0.21;
    }
    calcularTotal() {
        this.total = this.subTotal + this.envio + this.calcularEnvio();
    }
}

const pedidoProducto = () => {
    let producto = 0;
    let cantidadProducto = 0;
    let precio = 0;
    
    while (producto == 0 || producto > 4 || !producto) {
        producto = parseInt(prompt("Que Curso deseas Comprar?:\n 1: Tecnica-de-extraccion($5000)\n 2:Taller-para-tostar($1800)\n 3:Receta-para-cafe($2000)"));
    }

    switch(producto) {
        case 1:
            producto = "Tecnica-de-extraccion";
            precio = 5000;
            break;
        case 2:
            producto = "Taller-para-tostar";
            precio = 1800;
            break;
        case 3:
            producto = "Receta-para-cafe"; 
            precio = 2000;
            break;

    }

    while( cantidadProducto == 0 || !cantidadProducto ) {
        cantidadProducto = parseInt(prompt("Producto elegido: "+ producto + "\n introduzca la cantidad deseada.(Solo numero)"));
    }

    const Comprar = new pedido(producto, precio, cantidadProducto);

    return Comprar;
};

alert("Bienvenido/a la tienda online")

const pedido = pedidoProducto();

pedido.calcularTotal();
pedido.calcularEnvio();
pedido.calcularTotal();

alert("Detalle del pedido:\n\n"+
     "- "+pedido.producto+ " x " +pedido.cantidad+ ": $"+pedido.precio * pedido.cantidad +"\n" +
     "- IVA 21%:  $" +pedido.calcularIva()+ "\n" +
     "- Costo de envio: $"+pedido.envio+ "\n\n" +
     "Total = $" +pedido.total

);

