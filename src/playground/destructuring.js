/* 

 ---- OBJECT DESTRUCTUING -----
const person = {
    name: 'Alexander',
    age: 28,
    location: {
        city: 'Denver',
        temp: 90
    }
};

// much like using named exports
// this line creates a name variable and age variable. It looks for name and age in the person object
const {name = 'Default', age} = person

// const name = person.name
// const age = person.age


console.log(`${name} is ${age}.`)

const{city, temp: temperature} = person.location

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}
*/

/*

Challenge 

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};


const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName); // if there is no name use default of Self-Published

*/

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// If you don't want zip then just leave it off
// If you don't want a beginning item then just leave the comma 
// Default naming works the same  see state example. 
const [, city, state = 'New York', zip] = address; 

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)' , '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item

console.log(`A medium ${coffee} costs ${medium}`)