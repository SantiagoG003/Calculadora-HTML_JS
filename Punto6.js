// Función para agregar un valor al elemento de visualización
function addToDisplay(value) {
    document.getElementById("display").value += value;
}

// Función para calcular la expresión matemática en el elemento de visualización
function calculate() {
    // Intenta realizar el cálculo
    try {
        // Evalúa la expresión y establece el resultado en el elemento de visualización
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) { // Manejo de errores
        // Si ocurre un error, muestra "Error" en el elemento de visualización
        document.getElementById("display").value = "Error";
    }
}

// Función para limpiar el elemento de visualización
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Función para retroceder un carácter en el elemento de visualización
function backspace() {
    // Obtiene el elemento de visualización
    var display = document.getElementById("display");
    // Elimina el último carácter del valor del elemento de visualización
    display.value = display.value.slice(0, -1);
}

// Función para calcular el logaritmo base 2 de la expresión en el elemento de visualización
function calculateLog2() {
    // Intenta realizar el cálculo
    try {
        // Calcula el logaritmo base 2 de la expresión y establece el resultado en el elemento de visualización
        document.getElementById("display").value = Math.log2(eval(document.getElementById("display").value));
    } catch (error) { // Manejo de errores
        // Si ocurre un error, muestra "Error" en el elemento de visualización
        document.getElementById("display").value = "Error";
    }
}

// Función para calcular el logaritmo natural de la expresión en el elemento de visualización
function calculateLog() {
    // Intenta realizar el cálculo
    try {
        // Calcula el logaritmo natural de la expresión y establece el resultado en el elemento de visualización
        document.getElementById("display").value = Math.log(eval(document.getElementById("display").value));
    } catch (error) { // Manejo de errores
        // Si ocurre un error, muestra "Error" en el elemento de visualización
        document.getElementById("display").value = "Error";
    }
}

// Función para calcular la raíz cuadrada de la expresión en el elemento de visualización
function calculateSqrt() {
    // Intenta realizar el cálculo
    try {
        // Calcula la raíz cuadrada de la expresión y establece el resultado en el elemento de visualización
        document.getElementById("display").value = Math.sqrt(eval(document.getElementById("display").value));
    } catch (error) { // Manejo de errores
        // Si ocurre un error, muestra "Error" en el elemento de visualización
        document.getElementById("display").value = "Error";
    }
}

// Función para calcular la inversa de la expresión en el elemento de visualización
function calculateFraction() {
    // Intenta realizar el cálculo
    try {
        // Calcula la inversa de la expresión y establece el resultado en el elemento de visualización
        document.getElementById("display").value = 1 / eval(document.getElementById("display").value);
    } catch (error) { // Manejo de errores
        // Si ocurre un error, muestra "Error" en el elemento de visualización
        document.getElementById("display").value = "Error";
    }
}

// Función para calcular el factorial de la expresión en el elemento de visualización
function calculateFactorial() {
    // Intenta realizar el cálculo
    try {
        // Obtiene el número del elemento de visualización y lo convierte a entero
        var num = parseInt(document.getElementById("display").value);
        // Si el número es negativo, lanza un error
        if (num < 0) {
            throw "Error";
        }
        // Inicializa el resultado como 1
        var result = 1;
        // Calcula el factorial del número
        for (var i = 2; i <= num; i++) {
            result *= i;
        }
        // Establece el resultado en el elemento de visualización
        document.getElementById("display").value = result;
    } catch (error) { // Manejo de errores
        // Si ocurre un error, muestra "Error" en el elemento de visualización
        document.getElementById("display").value = "Error";
    }
}
