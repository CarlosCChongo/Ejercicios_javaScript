
const arregloDeNumeros = [3,6,12,5,100,1];
let sortedArray = funcionBurbuja(arregloDeNumeros);
function funcionBurbuja(arreglo) {
    let n = arreglo.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                let temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
    }

    return arreglo;
}


