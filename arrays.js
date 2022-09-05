const carrito = [];


//Definir productos 

const producto = {
    nombre: "Sony a6000",
    precio: 400 
}

const producto2 = {
    nombre: "Sony a7",
    precio: 1500
}

carrito.push(producto);
carrito.push(producto2);

/* console.table(carrito) */;

console.table(producto);
console.table(producto2);

const producto3 = {
    nombre: "Sony a9",
    precio: 6000 
}

carrito.unshift(producto3);
carrito.unshift(producto2);

console.table(carrito);

//sumas

let totalCompra = 0
let productoSeleccionado = parseInt(prompt('Ingresa el numero del producto que quieres :1. Sony a600 - 2. Sony a7 - 3. Sony a9'))
let seguirComprando = true
let decision


while (seguirComprando === true) {
    if (productoSeleccionado === 1) {
        totalCompra = totalCompra + 400
    } else if (productoSeleccionado === 2) {
        totalCompra = totalCompra + 1500
    } else if (productoSeleccionado === 3) {
        totalCompra = totalCompra + 6000
    } 

    decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
    if (decision === 1) {
       productoSeleccionado = parseInt(prompt('Ingresa el numero del producto que quieres comprar 1. Sony a600 - 2. Sony a7 - 3. Sony a9'))
    } else if (decision === 2) {
        seguirComprando = false
   }

} 

alert('El valor total sin descuento ni impuestos es:'+totalCompra)