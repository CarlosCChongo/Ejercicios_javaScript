/*
Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

const arregloEjercicio3 = [1,2,3,4];

const valorInicial = 0
const arregloEjercicio3ConReduce = arregloEjercicio3.reduce(function (x,y) {return x + y + valorInicial})
/*
function ejercicio3conReduce() {
    let valorInicial2
    for (let i = 0; i < arregloEjercicio3.length; i++) {
        valorInicial2 = arregloEjercicio3[i] + x ;
        
    }
    return valorInicial2
}
*/

console.log(`Ejercicio 3`);
console.log(`Datos del ejercicio "array [1, 2, 3, 4]" con "reduce()" = ${arregloEjercicio3ConReduce}`);
