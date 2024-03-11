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
console.log(concatenacionJoin());



console.log(`Con metodo for`);
console.log(concatenacionConFor());


/**
 * Recibe un mensaje y lo imprime en un paragraph
 * @param {string} mensaje para imprimir en el DOM
 *
 */
//const imprimirEnParagraph = mensaje => document.getElementById("message").innerHTML = mensaje + document.getElementById("message").innerHTML;

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
console.log(`Datos ingresados ${arregloEjercicio2} con metodo .map (*2) = ${arregloEjercicio2conMap}`);
console.log(`Datos ingresados ${arregloEjercicio2} con metodo .map (*2) = ${fncArregloEjercicio2conMap()}`);

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

/*
Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/
let estudiantesCurso1 = ['Math', 'English', 'Programming'];
let estudiantesCurso2 = ['Geography', 'Spanish', 'Programming'];

let cursosEnComun = estudiantesCurso1.filter(curso => estudiantesCurso2.includes(curso));
if (cursosEnComun.length > 0) {
    console.log('Cursos en comunes: ', cursosEnComun);
} else {
    console.log('No hay cursos comunes.');
}

/*
Ejercicio 5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1 Write a command that prints out all of the people in the list.
2 Write the command to remove "Dani" from the array.
3 Write the command to remove "Juan" from the array.
4 Write the command to move "Luis" to the front of the array.
5 Write the command to add your name to the end of the array.
6 Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
7 Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.

*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1
console.log(`Ejercicio 5.1`);
function personas() {
    let peopleEjercicio51 = people.join([" , "]);
    return peopleEjercicio51
}
console.log(personas())

//2
console.log(`Ejercicio 5.2`);
//mostramos el array sin dani
let personasSinDani = people.filter(person => person !== "Dani");
console.log(personasSinDani);
//quitamos a dani del array
people.splice(1,1)

//3
console.log(`Ejercicio 5.3`);
let personasSinJuan = people.filter(personasSinDani => personasSinDani !== "Juan");
console.log(personasSinJuan);

//4
console.log(`Ejercicio 5.4`);
function ejercicio4(){
    personasSinJuan.splice(1,1)
    let personasEjercicio54 = personasSinJuan;
    personasEjercicio54.unshift('Luis')
    return personasEjercicio54
}
console.log(ejercicio4()) 
//5
console.log(`Ejercicio 5.5`);
personasSinJuan.push('Carlos');
console.log(personasSinJuan)

//6
console.log(`Ejercicio 5.6`);
for (i = 0; i < people.length; i++) {
    console.log(people[i])
    
    if (people[i] === "Maria") {

      break;
    }
  }

//7

console.log(`Ejercicio 5.7`);
console.log(`El indice de maria del arreglo ${people} es ${people.indexOf('Maria')}`)


//end
console.log(`final del ejercicio`);
console.log(personasSinJuan)




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


