import { capitalize } from './stringUtils';
import greet, {farewell} from './greeter';

const greeting = 'hello world';
console.log(capitalize(greeting));


console.log(greet('Aicha')); 
console.log(farewell('Mohammed'));