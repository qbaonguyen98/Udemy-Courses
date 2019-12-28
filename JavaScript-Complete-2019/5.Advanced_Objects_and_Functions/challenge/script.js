/*
--- Let's build a fun quiz game in the console! ---

    1. Build a function constructor called Question to describe a question. A question should include:
        a) question itself
        b) the answers from which the player can choose the correct one 
        (choose an adequate data structure here, array, object, etc.)
        c) correct answer (I would use a number for this)

    2. Create a couple of questions using the constructor

    3. Store them all inside an array

    4. Select one random question and log it on the console, together with the possible answers (each question should have a number) 
    (Hint: write a method for the Question objects for this task).

    5. Use the 'prompt' function to ask the user for the correct answer. 
    The user should input the number of the correct answer such as you displayed it on Task 4.

    6. Check if the answer is correct and print to the console whether the answer is correct or not 
    (Hint: write another method for this).

    7. Suppose this code would be a plugin for other programmers to use in their code. 
    So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// 1
function Question (question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
};
Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (i = 0; i<this.choices.length; i++) {
        console.log((i+1) + '. ' + this.choices[i]);
    }
}

// 2
var question1 = new Question('\nWhat is the name of Germany football league?', [
    'La Liga',
    'Bundesliga',
    'Premiere League'
], 2);
var question2 = new Question('\nWhich Germany football club has the nickname \'Die Borussen\'?', [
    'Borussia Monchegladbach',
    'Bayer Levekusen',
    'Borussia Dortmund'
], 3);
var question3 = new Question('\nWhich player is the caption of Borussia Dortmund at present?', [
    'Marco Reus',
    'Mario Gotze',
    'Mats Hummels'
], 1);
var question4 = new Question('\nHow many times did Borussia Dortmund win the UEFA Champion Leage?', [
    '1',
    '4',
    '2'
], 1);

// 3
var questionList = [question1, question2, question3, question4];

// ----------------- 4-7: commented for the 8,9,10,11 --------------------
// // 4
// var randomQuestion = questionList[Math.floor(Math.random()*3 + 1)];
// randomQuestion.displayQuestion();

// // 5
// var userAns = window.prompt('Answer the question by entering the number from 1 to 3.');

// // 6
// Question.prototype.checkAnswer = function(userAns) {
//     if (parseInt(userAns) === this.answer) {
//         console.log('Correct Answer! Well done!');
//     } else {
//         console.log('Incorrect Answer!');
//     }
// };
// randomQuestion.checkAnswer(userAns);

// // 7 --> Wrap all code into an IIFE


/*
--- Expert level ---

    8. After you display the result, display the next random question, so that the game never ends 
    (Hint: write a function for this and call it right after displaying the result)

    9. Be careful: after Task 8, the game literally never ends. 
    So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

    10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score 
    (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

    11. Display the score in the console. Use yet another method for this.
*/
var score = 0;

Question.prototype.checkAnswer = function(userAns) {
    if (parseInt(userAns) === this.answer) {
        console.log('\nCorrect Answer! Well done!');
        score += 1;
    } else {
        console.log('\nIncorrect Answer!');
    }
    console.log('----- Your score: ' + score + ' -----');
};

function foo () {
    var randomQuestion = questionList[Math.floor(Math.random()*3 + 1)];
    randomQuestion.displayQuestion();
    var userAns = window.prompt('Answer the question by entering the number from 1 to 3.');
    if (userAns === 'exit') {
        console.log('----- Game Over -----');
        console.log('----- Your score: ' + score + ' -----');
        return;
    }
    randomQuestion.checkAnswer(userAns);
    foo();
}

foo();
