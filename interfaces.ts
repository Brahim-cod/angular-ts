// Interfaces

// An interface in TypeScript is used to define the structure of an object.
// You can specify the types of various properties that the object can have.
// Not like OOP

interface Vehicle {
    make: string;
    model: string;
    year?;
}

function createVehicle(vehicle: Vehicle): Vehicle {
    return vehicle;
}


// Optional Properties

interface Person {
    firstName: string;
    lastName: string;
    age?: number;
    email?: string;
}

// For inheritance
// interface ExtendedPerson extends Person {
//     email?: string; // Optional property
// }

function updatePerson(person: Person, personUpdated: Person) : Person {

    return { ...person, ...personUpdated };

}

// Readonly Properties

interface Circle {
    readonly centerX: number;
    readonly centerY: number;
    readonly radius: number;
}

function moveCircle(circle: Circle, newCenterX: number, newCenterY: number): Circle {
    // circle.centerX = newCenterX;
    // circle.centerY = newCenterY;
    // return circle;
 
    // Error throw because of centerX and centerY are readonly prop 
    // to fix it should create new object of Circle

    let c: Circle = {
        ...circle,
        centerX: newCenterX,
        centerY: newCenterY,
    };

    return c;
}

