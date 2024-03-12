// Number, String, and Boolean

let temperature: number = 24;
let welcomeMessage: string = 'Welcome to TypeScript !';
let isLoggedIn : boolean = true;

// Arrays and Tuples

let colors: string[] = ['red', 'green', 'blue'];
let userInfo: [string, number] = ['brokly', 22]; // Tuple

// Enum, Any, Void, Null, and Undefined

enum Season {Spring, Summer, Autumn, Winter}
let sp = Season.Spring;

function logValue(log: any) {
    console.log(log);
}

function noReturn(): void {
    console.log('No return');
}