// Generics

// Generic Functions

// function identity<T>(arg: T): T {
//     return arg;
// }

let text: string = identity('hello');
let x: number = identity(45);
let isLog: boolean = identity(true);
let users: string[] = identity(['brokly', 'Hm_X10']);

function identity<T>(arg: T): T {
    console.log(`Type of arg: ${typeof arg}`);
    return arg;
}

// Generic Interfaces
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;

interface GenericArray<T> {
    [index: number]: T
}


let numberArray: GenericArray<number> = [1, 2, 3] ;
let stringArray: GenericArray<string> = ['hello', 'world'];


