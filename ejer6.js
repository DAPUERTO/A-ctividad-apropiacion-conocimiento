// 6. Manejo de errores con Promesas
// Ejercicio:
// Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve
// y reject.
// Meta: entender .catch() y la importancia del manejo de errores.

// Definimos la funcion que retorna una Promesa
const simularProceso = () => {

    // Retornamos una nueva instancia de Promise que recibe una funcion ejecutora
    // con dos argumentos: resolve (para exito) y reject (para error)
    return new Promise((resolve, reject) => {
        // Simulamos un retraso de 2 segundos con setTimeout
        setTimeout(() => {
            // Generamos un numero aleatorio entre 0 y 1. Si es mayor a 0.5, consideramos exito.
            const exito = Math.random() > 0.5;
            if (exito) {
                // Si la operacion fue exitosa, resolvemos la promesa con un mensaje
                resolve("Proceso exitoso");
            } else {
                // Si la operacion fallo, rechazamos la promesa con un mensaje de error
                reject("Proceso fallido");
            }
        }, 2000); // 2000 milisegundos = 2 segundos
    });
}

// Llamamos a la funcion que retorna la promesa
simularProceso()
    .then((resultado) => {
        // .then() se ejecuta si la promesa es resuelta (exito)
        console.log(resultado);
    })
    .catch((error) => {
        // .catch() se ejecuta si la promesa es rechazada (error)
        console.log(error);
    });

    

