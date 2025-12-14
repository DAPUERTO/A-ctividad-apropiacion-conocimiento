// 7. Uso de Async/Await Ejercicio:
// Crear una función async que espere una promesa de 2 segundos y luego muestre el resultado.
// Meta: comprender cómo await pausa la ejecución sin bloquear el hilo.

const simularProceso = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.5;
            if (exito) {
                resolve("Proceso exitoso");
            } else {
                reject("Proceso fallido");
            }
        }, 2000);
    });
}

async function iniciarPedido() {
    try {
        console.log("Pedido iniciado");
        const resultado = await simularProceso();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

iniciarPedido();

