'use strict';

let userName = prompt('Whats\'s your name?');
while (!userName) {
    userName = prompt('Please write somthing');
}

alert('Hello ' + userName + '\nWelcome to our website, let\'s have some fun!')

let score = 0;

function question1() {
    let foodLover = prompt('Am I a food lover (foodie person)?');
    foodLover = foodLover.toLowerCase();

    if (foodLover === 'yes' || foodLover === 'y') {
        alert('Great! Your answer is correct.');
        score++;
    } else if (foodLover === 'no' || foodLover === 'n') {
        alert('Your answer is not correct');
    } else {

        alert('Please anwser with yes/y or no/n');
    }
}
question1();
function question2() {
    let sistersBrothers = prompt('Do I have any sisters or brothers?');
    sistersBrothers = sistersBrothers.toLowerCase();

    if (sistersBrothers === 'yes' || sistersBrothers === 'y') {
        alert('Great! Your answer is correct.');
        score++;
    } else if (sistersBrothers === 'no' || sistersBrothers === 'n') {
        alert('Your answer is not correct');
    } else {
        alert('Please anwser with yes/y or no/n');

    }
}
question2();
function question3() {
    let likeMusic = prompt('Do I like music?');
    likeMusic = likeMusic.toLowerCase();
    if (likeMusic === 'yes' || likeMusic === 'y') {
        alert('Great! Your answer is correct.');
        score++;
    } else if (likeMusic === 'no' || likeMusic === 'n') {
        alert('Your answer is not correct');
    } else {
        alert('Please anwser with yes/y or no/n');

    }
}

question3();

function question4() {
    let watchFootball = prompt('Do I watch football matches?');
    watchFootball = watchFootball.toLowerCase();
    if (watchFootball === 'yes' || watchFootball === 'y') {
        alert('Great! Your answer is correct.');
        score++;
    } else if (watchFootball === 'no' || watchFootball === 'n') {
        alert('Your answer is not correct');
    } else {
        alert('Please anwser with yes/y or no/n');

    }
}

question4();
function question5() {
    let wearingColors = prompt('Do I like wearing colors?');
    wearingColors = wearingColors.toLowerCase();


    if (wearingColors === 'yes' || wearingColors === 'y') {
        alert('Your answer is not correct');
    } else if (wearingColors === 'no' || wearingColors === 'n') {
        alert('Great! Your answer is correct.');
        score++;
    } else {
        alert('Please anwser with yes/y or no/n');

    }

}

question5();
function question6() {
    let guessNumber = null;
    for (let i = 0; i < 4; i++) {
        guessNumber = prompt('Guess a number between 0 and 10?');
        guessNumber = parseInt(guessNumber);
        if (guessNumber === 5) {
            alert('Great! you are correct');
            score++;
            break;
        } else if (guessNumber < 5) {
            alert('This is too low');

        } else if (guessNumber > 5) {
            alert('This is too high');
        }
        if (i === 3) {
            alert('the correct answer is 5')
        }
    }

}
question6();

function question7() {
    let favoriteColor = null;
    let colors = ['blue', 'black', 'purple'];
    for (let i = 1; i < 6; i++) {
        favoriteColor = prompt('What do you think my favorite color is?\n red\nblack\nwhite\npink\nblue\npurple?');
        favoriteColor = favoriteColor.toLowerCase();
        if (favoriteColor === colors[0] || favoriteColor === colors[1] || favoriteColor === colors[2]) {
            alert('Great! your answer is correct');
            score++;
            break;
        }
        else {
            prompt('Guess another color');
        }
        if (i === 6) {
            alert('You are run out of attempts!');

        }
    }
}

question7();
alert('We hope you enjoy the game ' + userName + ', your score is ' + score);


