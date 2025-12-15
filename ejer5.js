// 5. Transformando Callbacks en Promesas
// Ejercicio:
// Convertir el ejercicio anterior en una estructura basada en Promesas con .then().
// Meta: visualizar cómo mejora la legibilidad.


// Convierte la operación de iniciar en una Promesa.
// La Promesa se resuelve cuando la operación asíncrona termina.
const iniciarPedido = () => {
    return new Promise((resolve, reject) => {
        // Simula una tarea asíncrona (p. ej. solicitar datos al servidor).
        setTimeout(() => {
            console.log("Pedido iniciado");
            // Resuelve la promesa para permitir el encadenamiento con .then()
            resolve();
            // En un caso real, podríamos llamar a `reject(error)` si ocurre un fallo.
        }, 2000);
    });
}

// Convierte el procesamiento en una Promesa similar.
const procesarPedido = () => {
    return new Promise((resolve, reject) => {
        // Simula procesamiento del pedido.
        setTimeout(() => {
            console.log("Pedido procesado");
            resolve();
        }, 2000);
    });
}

// Encadena las Promesas para ejecutar los pasos en orden.
// `.then()` se ejecuta cuando la promesa anterior se resuelve.
iniciarPedido()
    .then(() => procesarPedido())
    .then(() => mostrarResultado())
    // Buen lugar para manejar errores con .catch()
    .catch((err) => console.error('Error en la cadena de promesas:', err));

// Función final que muestra el resultado. Se define después pero funciona
// porque las funciones flecha asignadas a constantes también existen en tiempo
// de ejecución cuando se alcanza su llamada (hoisting diferente a function declaration).
const mostrarResultado = () => {
    console.log("Pedido entregado");
}


