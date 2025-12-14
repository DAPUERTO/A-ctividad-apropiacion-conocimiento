// 4. Encadenamiento de Callbacks (Callback
// Hell controlado) Ejercicio:
// Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar
// resultado), cada uno con un setTimeout, y enlazarlos mediante callbacks.
// Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras.


function iniciarPedido(callback) {
    setTimeout(() => {
        console.log("Pedido iniciado");
        callback();
    }, 2000);
}

function procesarPedido(callback) {
    setTimeout(() => {
        console.log("Pedido procesado");
        callback();
    }, 2000);
}

function mostrarResultado() {
    console.log("Pedido entregado");
}

iniciarPedido(() => {
    procesarPedido(() => {
        mostrarResultado();
    });
});


