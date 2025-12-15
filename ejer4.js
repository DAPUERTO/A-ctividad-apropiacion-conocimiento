// 4. Encadenamiento de Callbacks (Callback
// Hell controlado) Ejercicio:
// Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar
// resultado), cada uno con un setTimeout, y enlazarlos mediante callbacks.
// Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras.
// Ejemplo de encadenamiento de callbacks (callback hell controlado).
// Simula tres pasos secuenciales: iniciar -> procesar -> mostrar.

// Inicia el pedido. Recibe un callback que se ejecuta cuando termina.
function iniciarPedido(callback) {
    // Simulamos una operación asíncrona con setTimeout (2 segundos).
    setTimeout(() => {
        console.log("Pedido iniciado");
        // Llamamos al siguiente paso cuando esta tarea finaliza.
        callback();
    }, 2000);
}

// Procesa el pedido. También recibe un callback para continuar la cadena.
function procesarPedido(callback) {
    // Otra tarea asíncrona simulada (2 segundos).
    setTimeout(() => {
        console.log("Pedido procesado");
        // Continúa con el siguiente callback.
        callback();
    }, 2000);
}

// Muestra el resultado final (último paso, sin callback necesario).
function mostrarResultado() {
    console.log("Pedido entregado");
}

// Encadenamos las llamadas: iniciar -> procesar -> mostrar.
// Cada paso pasa un callback al siguiente, lo que causa "anidamiento".
iniciarPedido(() => {
    procesarPedido(() => {
        mostrarResultado();
    });
});


