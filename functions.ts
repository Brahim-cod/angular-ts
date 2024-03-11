// Functions

function greet(name: string): string {
    return `Hello, ${name}!`;
}

function multiply(x: number, y: number): number {
    return x * y;
}

// Functions ==> Optional and Default Parameters

function createEmail(to: string, subject: string = 'No Subject'): string {
    return `to : ${to} | subject : ${subject}`
}

function add(x: number, y: number, z?: number): number {
    if (z) {
        return x + y + z;
    }

    return x + y;
}

// Functions ==> Rest Parameters

function concatenateStrings(...strings: string[]): string {
    return strings.join(' ');
}

function maxNumber(...numbers: number[]): number {
    return Math.max(...numbers);
}

