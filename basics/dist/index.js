"use strict";
// how to complie to js
// tsc index.ts
// you can watch the file compiling, by tsc --watch index.ts
// by default compiler while compile to es5, but you can change thath in tscofig.json file
// by changing, it means that you can set to compile whatever version of ES you want (ES6, ES7)!!!
// setup configuration file, will start with command tsc --init, and it will create tsconfig.ts file
// when you change to which version you want to compile, and then you can run a tsc command for compiling, and it will find all tsc file and compile them.
// Basic types
let id_ = 5;
// console.log(`Id is ${id_}`)
let company = "Yeah Yeah Yeah Company";
let isPublished = true;
let x = 'Hello'; // if it is any it will not complain on compiling
// you can just initialized, and later declare, but if it is not the type it will produce error
let age;
age = 35;
let ids = [1, 2, 3, 4, 5]; // it will comlain about everything you try to put in the list, which is not a number...
// but if you declare any it will be ok to place anything in that list
let arr = [];
// Tuple
let person; // it will complain it we do not follow the order which we already declared.
// Tuple Array
let employee;
employee = [
    [1, 'Vladimir'],
    [2, 'Milan'],
    [3, 'Bojan']
];
// Union
let _id = 33; // type of _id can be string or number
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {})); // they have values by default -> 0, 1, 2, 3
console.log(Direction1.Up); // you should get 0
// but you can change the values
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {})); // they have values 0, 1, 2, 3
console.log(Direction2.Up); // and now you will get 1
console.log(Direction2.Left); // and now you will get 3
// and you can change the values to string
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Up);
// Objects
const user = {
    _id: 1,
    user: 'Mijato'
};
const anotherUser = {
    _id: 33,
    user: 'John Doe'
};
// Type Assertion (you can declare it in two ways)
let cid = 1;
//let customerId= <number>cid // first way
let customerId = cid;
// Functions with types
// by default it will complain that you did not give a types of arguments, but you can exclude it in tsconfig.js
// and last :number is which type we expect as return value
function addNum(x, y) {
    return x + y;
}
console.log(addNum(33, 33));
// Void
function log(message) {
    console.log(message);
}
log(33);
const user1 = {
    _id: 1,
    name: 'John'
};
const p1 = 1;
const user111 = {
    _id: 33,
    name: 'Mijatonius'
};
const new_user = {
    _id: 333,
    name: 'Clark'
};
new_user._id = 334;
const addTwoNums = (x, y) => x + y; // every arg must follow interface type declaration
// here we user interface as a template
const subtractTwoNums = (x, y) => x - y;
// Classes, how to use them with interfaces (they started from es6)
class Person {
    constructor(_id, name, email) {
        this._id = _id;
        this.name = name;
        this.email = email;
    }
    register() {
        return `${this.name} is registerd now!!!`;
    }
}
const mijato = new Person(33, 'Vladimir', 'mijato@mail.com');
const sanja = new Person(23, 'Sanja', 'sanja@mail.com');
mijato._id = 333;
sanja._id = 344;
// because is private you cannot assing new mail, it will produce an error
// if it is protected, it can be used witin a class or a witin extended class
// more on private and protected on: https://dev.to/bhagatparwinder/classes-in-js-public-private-and-protected-1lok
// and also you cannot console.log private ones
// mijato.email = 'mijatovski@gmail.com'
console.log(mijato.register());
console.log(mijato, sanja);
class PersonFromInterface {
    constructor(_id, name, email) {
        this._id = _id;
        this.name = name;
    }
    register() {
        return `${this.name} is registerd now!!!`;
        // return 22 // will produce error, because you already declared that register func will return string
    }
}
// inheritance with interfaces (SUBCLASS)
// maybe to add position as well
class Employee extends Person {
    constructor(_id, name, email, position) {
        super(_id, name, email);
        this.position = position;
    }
}
const emp = new Employee(333, 'Hank', 'hanksmail@gmail.com', 'cleaner');
console.log(emp.register());
// Generics
let fn = (items) => {
    return new Array().concat(items);
};
let numArray = fn([1, 2, 3, 4]);
let strArray = fn(['Bibs', 'Bjorn', 'Dalton']);
numArray.push('Boby');
// T represent a placeholder for a type
let fn_with_T = (items) => {
    return new Array().concat(items);
};
let numArray_with_T = fn_with_T([1, 2, 3, 4]);
let strArray_with_T = fn_with_T(['Bibs', 'Bjorn', 'Dalton']);
// numArray_with_T.push('Boby') // it's an error cause we declare type with T
numArray_with_T.push(3333);
