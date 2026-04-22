function calcularEcuacion() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let respuesta = document.getElementById("respuestaEcuacion");
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        res.textContent = "Ingresa todos los valores";
        return;
    }
    if (a === 0) {
        res.textContent = "No es ecuación de segundo grado";
        return;
    }
    let d = b * b - 4 * a * c;
    if (d < 0) {
        respuesta.textContent = "No tiene solución real";
    } else if (d === 0) {
        let x = -b / (2 * a);
        respuesta.textContent = "Solución única: x = " + x;
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        respuesta.textContent = "x1 = " + x1 + " | x2 = " + x2;
    }
}
//Ejercicio Factorial
function calcularFactorial() {
    let n = parseInt(document.getElementById("num").value);
    let respuesta = document.getElementById("respuestaFactorial");
    if (isNaN(n)) {
        respuesta.textContent = "Ingresa un número";
        return;
    }
    if (n < 0) {
        respuesta.textContent = "No existe factorial de negativos";
        return;
    }
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    respuesta.textContent = "Factorial = " + f;
}