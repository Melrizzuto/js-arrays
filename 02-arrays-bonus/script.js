const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
// arrow function
// const longNames = teachers.filter(teacher => teacher.length >= 5);
// funzione anonima
/* const longNames = teachers.filter(function(teacher) { 
  if (teacher.length >= 5) {
    return teacher;
  }
}); */
// funzione classica
// const longNames = teachers.filter(teacherLenght);
// function teacherLenght(teacher) { 
//   if (teacher.length >= 5) {
//     return teacher;
//   }
// }
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5, 1);
console.log(teachers);