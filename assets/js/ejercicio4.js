/*
Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/
let estudiantesCurso1 = ['Math', 'English', 'Programming'];
let estudiantesCurso2 = ['Geography', 'Spanish', 'Programming'];


console.log(`Ejercicio 4`);
console.log(`usando .filter() y .includes()`);
let cursosEnComun = estudiantesCurso1.filter(curso => estudiantesCurso2.includes(curso));
if (cursosEnComun.length > 0) {
    console.log('Cursos en comunes: ', cursosEnComun);
} else {
    console.log('No hay cursos comunes.');
}
