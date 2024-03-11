function logged(constructor: Function, ...args: any[]) {
    console.log(`${constructor.name} is created`); 
}

@logged //throw an error to fix it I find we should add ...args: any[] as parameter in logged function
class User {
    private username: string;
    private password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

const newUser = new User('Brokly', '123456');

function format(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        let result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
}


function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    @format
    greet() {
        return "Hello, " + this.greeting;
    }
}