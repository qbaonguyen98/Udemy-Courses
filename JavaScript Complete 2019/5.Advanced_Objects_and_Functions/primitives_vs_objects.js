// Difference between primitives and objects: 

/*
    1. A primitive variable holds the data itself. 
    While, an object variable contains a reference to the memory where the object is stored
*/
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
// -----------------------
var obj1 = {
    name: 'Reus',
    age: 30
};
var obj2 = obj1;
obj1.age = 20;
console.log(obj1);
console.log(obj2);
// ----- try passing primitive and object into a function
var age = 35;
var obj = {
    name: 'Peter',
    city: 'New York'
}
function change(a, b) {
    a = 9;
    b.city = 'Dortmund';
}
change(age, obj);
console.log(age);   // not changed
console.log(obj);   // change