import this_day from 'moment';


function greet() {
    let day = this_day().format('dddd');
    console.log(`Have a great ${day}!`);
}

export default greet;