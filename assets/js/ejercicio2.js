/*
Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

*/

let arregloEjercicio2 = [1, 2, 4, 5]

let arregloEjercicio2conMap = arregloEjercicio2.map(function (x) {
    return x * 2;
});

function fncArregloEjercicio2conMap() {
    let concatenacionMap = [];
    for (let i = 0; i < arregloEjercicio2.length; i++) {
        concatenacionMap += arregloEjercicio2[i] * 2 + ' ' 

    }
    return concatenacionMap
}



console.log(`Ejercicio 2`);
console.log(`Datos del ejercicio "array [1, 2, 4, 5]" con "map()"`);
console.log(`Datos ingresados ${arregloEjercicio2} (*2) con metodo .map  = ${arregloEjercicio2conMap}`);
console.log(" ");
console.log("con una funcion for ");
console.log(fncArregloEjercicio2conMap);
console.log(`Datos ingresados ${arregloEjercicio2} (*2) con una funcion for  = ${fncArregloEjercicio2conMap()}`);
