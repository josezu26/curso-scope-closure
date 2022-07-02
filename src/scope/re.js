var firstName; //Undefined
firstName = 'Jose';

console.log(firstName);

var lastName = 'Zuniga';  //declarar asignar
lastName = 'Machaca'; // reasignar
console.log(lastName);

var secondName = 'Enrique'; // declarando / asignando
var secondName = 'Ana'; // reasignando
console.log(secondName);

// Let

let fruit = 'Apple'; //declarar y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);
//let fruit = 'Banana'; No se puede redeclarar con let

// Const
const animal = 'dog'; //declar y asigna
//animal = 'cat'; // No permite reasignar una constante
console.log(animal);


// Los array si se pueden modificar usando Const
const vehicles = [];
vehicles.push("Carrito");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);