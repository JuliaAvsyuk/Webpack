import './index.scss';
import Cat from './greeter/greeter.js';

console.log("I'm the entry point");
let newCat = new Cat('Bublick', 2, 'May-may');
newCat.myName();
newCat.myAge();
newCat.saySmt();
Cat.greet();