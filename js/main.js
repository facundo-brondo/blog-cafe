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
     "- "+pedido.Producto+ " x " +pedido.Cantidad+ ": $"+pedido.Precio * pedido.Cantidad +"\n" +
     "- IVA 21%:  $" +pedido.calcularIva()+ "\n" +
     "- Costo de envio: $"+pedido.Envio+ "\n\n" +
     "Total = $" +pedido.Total

);

// const carritoDeCursos = [
//     { id: 1, curso: "Tecnica de extraccion de cafe", precio: 2000 },
//     { id: 2, curso: "Taller para Tostar y Moler Granos", precio: 1000 },
//     { id: 3, curso: "4 Recetas de Café para Principiantes",  precio: 3500 }
// ];

// const guardarLocal = (clave, valor) => {
//     localStorage.setItem(clave, valor);
// };


// guardarLocal("carrito", JSON.stringify(carritoDeCursos));


// class Producto {
//     constructor(objeto) {
//         // this.nombre = objeto.nombre.toUpperCase();
//         this.precio = Number(objeto.precio);
//     }

//     sumarIva() {
//         this.precio = this.precio * 1.21;
//     }
// };

// const almacenados = JSON.parse(localStorage.getItem("carrito"));


// const productos = [];

// for ( const objeto of almacenados ) {
//     productos.push( new Producto(objeto) )
// }


// for ( const producto of productos ) {
//     producto.sumarIva();
// }

// // console.log(productos);

// const parrafo = document.querySelector("parrafo");
// const boton = document.querySelector("boton");

// boton.addEventListener("click", () => {
//     console.log("Click");
// });
const contenedor = document.getElementById('listado');
fetch('https://jsonplaceholder.typicode.com/posts')
.then( (resp) => resp.json() )
.then( data => {
    data.forEach( post => {
    const li = document.createElement('li');
    li.innerHTML = `
    <h4>${post.title}</h4>
    <p>${post.body}</p>`
    contenedor.append(li)
});

} )
