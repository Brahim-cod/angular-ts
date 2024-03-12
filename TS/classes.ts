// Classes

// Classes and Inheritance

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    constructor(dogName: string) {
        super(dogName);
    }
    move(distanceInMeters: number = 10) {
        console.log(`Dog : ${this.name} ran ${distanceInMeters}m.`);
    }
}

let myDog: Dog = new Dog('Abby')
myDog.move();
myDog.move(20);

// Public, Private, and Protected Modifiers

class Person {
    private name: string;
    constructor(name: string) { this.name = name; }
    public getName(): string {
        return this.name;
    }
}

let p1: Person = new Person('Mohammed');
p1.name; // name prop is private so is not accessible outside the class
p1.getName();




