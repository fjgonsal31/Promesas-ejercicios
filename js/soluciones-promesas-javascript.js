// Soluciones: Sistema de Pedidos con Promesas

const inventario = {
    'manzana': 5,
    'plátano': 3,
    'naranja': 2
};

// 1. Implementación de verificarInventario
function verificarInventario(producto, cantidad) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!inventario.hasOwnProperty(producto)) {
                reject(`Error: El producto ${producto} no existe en el inventario.`);
            } else if (inventario[producto] < cantidad) {
                reject(`Error: No hay suficiente ${producto} en el inventario.`);
            } else {
                const precio = generarPrecioAleatorio();
                resolve(precio * cantidad);
            }
        }, 1000); // Simulamos un retardo de 1 segundo
    });
}

// 2. Implementación de realizarPedido
function realizarPedido(producto, cantidad) {
    return verificarInventario(producto, cantidad)
        .then(precioTotal => {
            inventario[producto] -= cantidad; // Actualizamos el inventario
            return `Pedido realizado: ${cantidad} ${producto}(s) por $${precioTotal}`;
        })
        .catch(error => {
            throw error; // Propagamos el error
        });
}

// 3. Uso de realizarPedido con promesas encadenadas
console.log("Iniciando pedidos con promesas encadenadas...");
realizarPedido('manzana', 2)
    .then(mensaje => {
        console.log(mensaje);
        return realizarPedido('plátano', 3);
    })
    .then(mensaje => {
        console.log(mensaje);
        return realizarPedido('naranja', 5);
    })
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Proceso de pedidos completado.");
    });

// 4. Bono: Implementación con async/await
async function hacerPedidosAsync() {
    try {
        console.log("\nIniciando pedidos con async/await...");
        let mensaje = await realizarPedido('manzana', 2);
        console.log(mensaje);

        mensaje = await realizarPedido('plátano', 3);
        console.log(mensaje);

        mensaje = await realizarPedido('naranja', 5);
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Proceso de pedidos async completado.");
    }
}

// Funciones auxiliares (sin cambios)
function generarPrecioAleatorio() {
    return Math.floor(Math.random() * 10) + 1; // Precio entre 1 y 10
}

function simularRetardoRed() {
    return new Promise(resolve => setTimeout(resolve, 1000));
}

// Ejecutamos las soluciones
console.log("Iniciando ejercicio de promesas...");
hacerPedidosAsync();

// Nota: Debido a la naturaleza asíncrona, los resultados de las dos 
// implementaciones (promesas encadenadas y async/await) se intercalarán en la consola.
