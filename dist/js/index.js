"use strict";
//Para tipagem de constantes, basta inserir o tipo ao lado da contante.
let x = 10;
x = 21;
//inferencia x annotation
let y = 10; // inferencia
let z = 20; //annotation
// tipos básicos
let firstName = "Roger";
let age = 35;
const isAdmin = true;
//object ou arrays
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
//tuple
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
//object literals => {prop: value}
const user = {
    name: "Pedro",
    age: 18
};
console.log(user);
//any: pode ser usada para qualquer tipo de dado
let a = 0;
a = "teste";
a = true;
a = [];
//union type, você pode definir mais de um tipo para variável.
let id = 200;
id = "João";
id = true;
const userId = 10;
const productId = "00001";
const shirId = 123;
//enum, utilizado para evitar repetições de códigos.
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M
};
console.log(camisa);
//literal types, não é permitido alterar o valor predefinido.
let teste;
teste = "algumvalor";
teste = null;
//funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Roger"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
//narrowing, checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número"); // Neste caso o ELSE está implícito
}
//doSomething é o typeOf do Typescript
doSomething(5);
doSomething(true);
//generics
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItems(a1);
showArrayItems(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
