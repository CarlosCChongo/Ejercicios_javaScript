//ejercicio  1
/*
printOutString();
Complete the function to print out the string: This is a sentence.
*/

let arregloEjercicio1 = ["This", "is", "a", "sentence."];
function concatenacionJoin() {
    let concatenacionConJoin = arregloEjercicio1.join([" "]);
    return concatenacionConJoin
}

function concatenacionConFor() {
    let concatenacionFor = "";
    for (let i = 0; i < arregloEjercicio1.length; i++) {
        concatenacionFor += arregloEjercicio1[i] + ' ';
    }
    return concatenacionFor
}

console.log(`Ejercicio 1`);
console.log(`Con metodo .join`);
console.log(concatenacionJoin);
console.log(concatenacionJoin());



console.log(`Con metodo for`);

console.log(concatenacionConFor);
console.log(concatenacionConFor());


/**
 * Recibe un mensaje y lo imprime en un paragraph
 * @param {string} mensaje para imprimir en el DOM
 *
 */
//const imprimirEnParagraph = mensaje => document.getElementById("message").innerHTML = mensaje + document.getElementById("message").innerHTML;
