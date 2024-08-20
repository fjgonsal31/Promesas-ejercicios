// Ejercicio: Sistema de Pedidos con Promesas

// Esta función simula una base de datos de productos
const inventario = {
    'manzana': 5,
    'plátano': 3,
    'naranja': 2
};

// 1. Implementa esta función para que devuelva una promesa
// La promesa debe resolverse con el precio del producto si está en el inventario
// O rechazarse si el producto no existe o no hay suficiente cantidad
function verificarInventario(producto, cantidad) {
    // Tu código aquí
    // Pista: Usa new Promise((resolve, reject) => { ... })
}

// 2. Implementa esta función para que use la anterior y devuelva una promesa
// La promesa debe resolverse con un mensaje de éxito si se puede hacer el pedido
// O rechazarse con un mensaje de error en caso contrario
function realizarPedido(producto, cantidad) {
    // Tu código aquí
    // Pista: Usa verificarInventario y luego encadena con .then() y .catch()
}

// 3. Usa la función realizarPedido para hacer lo siguiente:
//    - Pide 2 manzanas
//    - Luego, pide 3 plátanos
//    - Finalmente, pide 5 naranjas
//    Maneja los posibles errores e imprime los mensajes correspondientes
// Tu código aquí


// 4. Bono: Implementa la misma lógica del punto 3 pero usando async/await
// Tu código aquí


// Estas funciones son para testing, no las modifiques
function generarPrecioAleatorio() {
    return Math.floor(Math.random() * 10) + 1; // Precio entre 1 y 10
}

// Esta función simula un retardo en la red
function simularRetardoRed() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

// Ejecuta tus funciones aquí para probarlas
console.log("Iniciando ejercicio de promesas...");

// Prueba tus implementaciones aquí
