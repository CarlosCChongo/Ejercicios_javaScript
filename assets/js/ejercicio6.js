
const arregloDeNumeros = [3,6,12,5,100,1];
function funcionBurbuja(arreglo) {
    let longitudArreglo = arreglo.length;

    for (let i = 0; i < longitudArreglo - 1; i++) {
        for (let j = 0; j < longitudArreglo - i - 1; j++) {
            // Compara elementos adyacentes
            if (arreglo[j] > arreglo[j + 1]) {
                let temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
    }

    return arreglo;
}
console.log(`Arreglo Antes de ordenarlo [${arregloDeNumeros}] `)
console.log("Arreglo usando el metodo burbble sort:", funcionBurbuja(arregloDeNumeros));
