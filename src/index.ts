//Para tipagem de constantes, basta inserir o tipo ao lado da contante.
let x: number = 10 

x = 21


//inferencia x annotation
let y = 10 // inferencia
let z: number = 20 //annotation


// tipos básicos
let firstName: string = "Roger"
let age: number = 35
const isAdmin: boolean = true


//object ou arrays
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers)
console.log(myNumbers.length)

//tuple
let myTuple: [number, string, string[]]

myTuple = [5, "teste", ["a", "b"]]

//object literals => {prop: value}
const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18
}

console.log(user)


//any: pode ser usada para qualquer tipo de dado

let a:any = 0

a = "teste"
a = true
a = []

//union type, você pode definir mais de um tipo para variável.
let id: string | number | boolean = 200
id = "João"
id = true

//type alias
type myIdType = number | string
const userId: myIdType = 10
const productId: myIdType = "00001"
const shirId: myIdType = 123


//enum, utilizado para evitar repetições de códigos.
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.M
}
console.log(camisa)


//literal types, não é permitido alterar o valor predefinido.
let teste: "algumvalor" | null
teste = "algumvalor"
teste = null


//funcoes
function sum(a: number, b:number) {
    return a + b
}

console.log(sum(12,12))

function sayHelloTo(name: string): string {
    return `Hello ${name}`
}
console.log(sayHelloTo("Roger"))

function logger(msg: string): void { //void utilizado em funções que não tem valor prédefinido.
    console.log(msg)
}

logger("Teste!")


//interface
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({ n1: 1, n2: 2 }))


function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams= {
    n1:5,
    n2:10
}

console.log(multiplyNumbers(someNumbers))


//narrowing, checagem de tipos
function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`O número é ${info}`)
        return
    }
    console.log("Não foi passado um número") // Neste caso o ELSE está implícito
}

//doSomething é o typeOf do Typescript
doSomething(5)
doSomething(true)


//generics
function showArrayItems<T>(arr: T[]) { // Os mais usados são <T> e <U>
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1,2,3]
const a2 = ["a", "b","c"]

showArrayItems(a1)
showArrayItems(a2)

//classes
class User {
    name
    role
    isApproved

    constructor(name: string, role:string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }
}

const zeca = new User("Zéca", "Admin", true)
console.log(zeca)
