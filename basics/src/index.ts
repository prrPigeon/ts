// how to complie to js
// tsc index.ts
// you can watch the file compiling, by tsc --watch index.ts

// by default compiler while compile to es5, but you can change thath in tscofig.json file
// by changing, it means that you can set to compile whatever version of ES you want (ES6, ES7)!!!

// setup configuration file, will start with command tsc --init, and it will create tsconfig.ts file
// when you change to which version you want to compile, and then you can run a tsc command for compiling, and it will find all tsc file and compile them.

// Basic types
let id_: number = 5
// console.log(`Id is ${id_}`)
let company: string = "Yeah Yeah Yeah Company"
let isPublished: boolean = true
let x: any = 'Hello' // if it is any it will not complain on compiling

// you can just initialized, and later declare, but if it is not the type it will produce error
let age: number
age = 35

let ids: number[] = [1,2,3,4,5] // it will comlain about everything you try to put in the list, which is not a number...
// but if you declare any it will be ok to place anything in that list
let arr: any[] = []

// Tuple
let person: [number, string, boolean] // it will complain it we do not follow the order which we already declared.

// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Vladimir'],
    [2, 'Milan'],
    [3, 'Bojan']
]

// Union
let _id: string | number = 33 // type of _id can be string or number

// Enum
enum Direction1 {
    Up,
    Down,
    Left, 
    Right
} // they have values by default -> 0, 1, 2, 3
console.log(Direction1.Up) // you should get 0

// but you can change the values
enum Direction2 {
    Up = 1,
    Down,
    Left, 
    Right
} // they have values 0, 1, 2, 3
console.log(Direction2.Up) // and now you will get 1
console.log(Direction2.Left) // and now you will get 3

// and you can change the values to string
enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left', 
    Right = 'Right'
}
console.log(Direction3.Up)


// Objects
const user:{
    _id: number,
    user: string
} = {
    _id: 1,
    user: 'Mijato'
}

// but previous few lines looks messy, you can do it like this:
type User = {
    _id: number
    user: string
}
const anotherUser: User = {
    _id: 33,
    user: 'John Doe'
}

// Type Assertion (you can declare it in two ways)
let cid: any = 1

//let customerId= <number>cid // first way
let customerId = cid as number

// Functions with types
// by default it will complain that you did not give a types of arguments, but you can exclude it in tsconfig.js

// and last :number is which type we expect as return value
function addNum(x: number, y:number): number {
    return x + y
}
console.log(addNum(33, 33))

// Void
function log(message: string | number): void {
    console.log(message)
}
log(33)

// Interfaces
interface UserInterface {
    _id: number
    name: string
}

const user1: UserInterface = {
    _id: 1,
    name: 'John'
}

// types vs interfaces
type Point = number | string
const p1: Point = 1
// but you cannot user interfaces like this
// you cannot user interfaces with primitives and union
// but you will use them in case with objects


// in interfaces there is an optional field, and it is declared as key name with ?, otherwise it will give you an error
interface PersonInterface {
    _id: number
    name: string
    age?: number 
}
const user111: PersonInterface = {
    _id:33,
    name: 'Mijatonius'
}

// you can declare readonly field in Interface
interface Person0Interface {
    _id: number
    readonly name: string
    age?: number 
}

const new_user: Person0Interface = {
    _id: 333,
    name: 'Clark'
}
new_user._id = 334
// new_user.name = 'Artur' // produce an error, becaues it is readonly field

// You can also user interfaces with functions
interface MathFunc{
    (x: number, y: number): number
}

const addTwoNums: MathFunc = (x: number, y: number): number => x + y // every arg must follow interface type declaration
// here we user interface as a template
const subtractTwoNums: MathFunc = (x: number, y: number): number => x - y

// Classes, how to use them with interfaces (they started from es6)
class Person {
    _id: number // these are public by default, but we can make them protected or to be a private
    name: string
    private email: string

    constructor(_id: number, name: string, email: string) {
        this._id = _id
        this.name = name
        this.email = email
    }

    register() {
        return  `${this.name} is registerd now!!!`
    }
}

const mijato = new Person(33, 'Vladimir', 'mijato@mail.com')
const sanja = new Person(23, 'Sanja', 'sanja@mail.com')

mijato._id = 333
sanja._id = 344

// because is private you cannot assing new mail, it will produce an error
// if it is protected, it can be used witin a class or a witin extended class
// more on private and protected on: https://dev.to/bhagatparwinder/classes-in-js-public-private-and-protected-1lok
// and also you cannot console.log private ones
// mijato.email = 'mijatovski@gmail.com'

console.log(mijato.register())
console.log(mijato, sanja)

// Interfaces with classes
interface ClassPersonInterface {
    _id: number
    name: string
    register(): string
}

class PersonFromInterface implements ClassPersonInterface {
    _id: number
    name: string

    constructor(_id: number, name: string, email: string) {
        this._id = _id
        this.name = name

    }
    register() {
        return  `${this.name} is registerd now!!!`
        // return 22 // will produce error, because you already declared that register func will return string
    }
}

// inheritance with interfaces (SUBCLASS)
// maybe to add position as well
class Employee extends Person {
    position: string

    constructor(_id: number, name: string, email: string, position: string){
        super(_id, name, email )
        this.position = position
    }
}

const emp = new Employee(333, 'Hank', 'hanksmail@gmail.com', 'cleaner')
console.log(emp.register())


// Generics
let fn = (items: any[]): any[] => {
    return new Array().concat(items)
}

let numArray = fn([1,2,3,4])
let strArray = fn(['Bibs', 'Bjorn', 'Dalton'])

numArray.push('Boby')

// T represent a placeholder for a type
let fn_with_T = <T>(items: T[]): T[] => {
    return new Array().concat(items)
}

let numArray_with_T = fn_with_T<number>([1,2,3,4])
let strArray_with_T = fn_with_T<string>(['Bibs', 'Bjorn', 'Dalton'])

// numArray_with_T.push('Boby') // it's an error cause we declare type with T
numArray_with_T.push(3333)