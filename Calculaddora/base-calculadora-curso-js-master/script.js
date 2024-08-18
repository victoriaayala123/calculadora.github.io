
// Función para agregar valores a la pantalla
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

// Función para borrar la pantalla
function borrar() {
    document.getElementById('pantalla').value = '';
}

// Función para calcular el resultado de la operación
function calcular() {
    try {
        const valorPantalla = document.getElementById('pantalla').value;
        const resultado = eval(valorPantalla);
        document.getElementById('pantalla').value = resultado;
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
    }
}

