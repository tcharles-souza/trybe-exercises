const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

console.log();
console.log('---------------------------Exercicio 4 ---------------------------');
console.log();

const student1 = {
    name: `Claudia`,
    lastName: `Farias`,
    age: 23,
};
  
const student2 = {
    name: `Vitor`,
    age: 20,
};
  
  // escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
  
  const getLastName = ({ lastName = 'lastName não preenchido' }) => lastName;

  console.log(getLastName(student1));
  console.log(getLastName(student2));

console.log();
console.log('---------------------------Exercicio 5 ---------------------------');
console.log();

const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

const [student01, [student02, student03], [student04, student05]] = moreStudents;
console.log(student01, student02, student03, student04, student05);

console.log();
console.log('---------------------------Exercicio 6 ---------------------------');
console.log();