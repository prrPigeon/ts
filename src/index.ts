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