import this_day from 'moment';

class Cat {
    constructor (name, age, talk){
        this.name = name;
        this.age = age;
        this.talk = talk;
    }
    saySmt(){
        console.log(`'${this.talk}'`);
    } 
    myName () {
        console.log('My name is ' + this.name);
    } 
    myAge() {
        console.log(`I'm ${this.age}.`);
    }
    static greet() {
        let day = this_day().format('dddd');
        console.log(`Have a great ${day}!`);
    }
}
export default Cat;
