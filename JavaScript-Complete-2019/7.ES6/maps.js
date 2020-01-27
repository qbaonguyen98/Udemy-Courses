// Map is a new key-value data structure in ES6

// --> But we're already have objects --> Why use map ?

// --> The special thing with maps is that we can use anything for the keys

// -----------------------------------------------------------------------------------------------------------------------

// create an empty map
const question = new Map();

// set some key-value pairs for it
question.set('question', 'What is the name of the latest major JS version?');

question.set(1, 'ES6');
question.set(2, 'ES7');
question.set(3, 'ES8');

question.set('answer', 'ES8');

question.set(true, 'Correct Answer !!!');
question.set(false, 'Incorrect, please try again');

console.log(question);
console.log(question.size);

// get the value of a key
console.log(question.get('question'));

// delete a key-value
question.delete(2);

// check if a map has a key
console.log(question.has('answer'));

// loop over a map - which we can NOT do with object
question.forEach((value, key) => console.log(`Key: ${key} - Value: ${value}`));

// another way for loop
console.log('\n----------------- for loop ------------------------------------------------------\n');
for (let [key, value] of question.entries()) {
    console.log(`Key: ${key} - Value: ${value}`);
}

// clear everything from our map
question.clear();