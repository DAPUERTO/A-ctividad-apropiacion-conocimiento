// 5. Transformando Callbacks en Promesas
// Ejercicio:
// Convertir el ejercicio anterior en una estructura basada en Promesas con .then().
// Meta: visualizar cómo mejora la legibilidad.


const iniciarPedido = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pedido iniciado");
            resolve();
        }, 2000);
    });
}

const procesarPedido = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pedido procesado");
            resolve();
        }, 2000);
    });
}

iniciarPedido()
    .then(() => procesarPedido())
    .then(() => mostrarResultado());

    const mostrarResultado = () => {
        console.log("Pedido entregado");
    }


