// Object.create - another way to implement inheritance instead of using Constructor and prototype

var personProto = {
    calAge: function() {
        console.log(2019 - this.born);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.born = 1998;

console.log(john.name);
john.calAge()

// another way

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    born: { value: 1990 }
});
console.log(jane.name);
jane.calAge();

console.log('\nTo sum up:\n');
console.log('1. We use Object.create() to create an empty object.')
console.log('2. The 1st argument is an object that we want to inherit');
console.log('3. The 2nd argument is an object to specify property/method of created object');