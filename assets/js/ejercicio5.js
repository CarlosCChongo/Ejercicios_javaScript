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
console.log(`Escribir el comando para mostrar a todas las personas de la lista ["Maria", "Dani", "Luis", "Juan", "Camila"]`);
function personas() {
    let peopleEjercicio51 = people.join([" , "]);
    return peopleEjercicio51
}
console.log(personas())

//2
console.log(`Ejercicio 5.2`);

console.log(`Escribir el comando para quitar a "Dani"`);
//mostramos el array sin dani
let personasSinDani = people.filter(person => person !== "Dani");
console.log(personasSinDani);
//quitamos a dani del array
people.splice(1,1)

//3
console.log(`Ejercicio 5.3`);

console.log(`Escribir el comando para quitar a "Juan"`);
let personasSinJuan = people.filter(personasSinDani => personasSinDani !== "Juan");
console.log(personasSinJuan);

//4
console.log(`Ejercicio 5.4`);
console.log(`Escribir el comando para mover a Luis al inicio"`);
function ejercicio4(){
    personasSinJuan.splice(1,1)
    let personasEjercicio54 = personasSinJuan;
    personasEjercicio54.unshift('Luis')
    return personasEjercicio54
}
console.log(ejercicio4()) 
//5
console.log(`Ejercicio 5.5`);
console.log(`Escribir el comando para agregar tu nombre al final del arreglo"`);
personasSinJuan.push('Carlos');
console.log(personasSinJuan)

//6
console.log(`Ejercicio 5.6`);

console.log(`Romper el ciclo cuando en pantalla aparezca "Maria"`);
for (i = 0; i < personasSinJuan.length; i++) {
    console.log(personasSinJuan[i])
    
    if (personasSinJuan[i] === "Maria") {

      break;
    }
  }

//7

console.log(`Ejercicio 5.7`);
console.log(`Escribe el comando que de el indexOf en el que se encuentre "Maria"`)
console.log(`El indice de maria del arreglo ${people} es ${people.indexOf('Maria')}`)


//end
console.log(`Al final del ejercicio te debe quedar un arreglo con 4 nombres`)
console.log(`final del ejercicio`);
console.log(personasSinJuan)
