// Advanced Types

// Union Types

function padLeft(value: string, padding: string | number): string {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    return `Expected string or number, got '${typeof padding}'.`;
}

// Intersection Types

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;


let customer: Customer = {
    name: 'Brahim Biyad',
    credit: 1500,
    email: 'bbiyad@sqli.com',
    phone: '+212678164271'
};

function greetBusinessPartner(partner: BusinessPartner & Contact): string {
    return `Hello, ${partner.name}! We've sent the details to your email: ${partner.email}`;
}

console.log(greetBusinessPartner(customer));