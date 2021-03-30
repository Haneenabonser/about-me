'use strict';

let userName = prompt('Whats\'s your name?');
while (!userName) {
    userName = prompt('Please write somthing');
}

alert('Hello ' + userName + '\nWelcome to our website, let\'s have some fun!')

let score = 0;

let foodLover = prompt('Am I a food lover (foodie person)?');
foodLover = foodLover.toLowerCase();

if (foodLover === 'yes' || foodLover === 'y') {
    // console.log('Great! Your answer is correct.');
    alert('Great! Your answer is correct.');
    score++;
} else if (foodLover === 'no' || foodLover === 'n') {
    // console.log('Your answer is not correct');
    alert('Your answer is not correct');
} else {
    //  console.log('Please anwser with yes or no');
    alert('Please anwser with yes/y or no/n');
}


let sistersBrothers = prompt('Do I have any sisters or brothers?');
sistersBrothers = sistersBrothers.toLowerCase();

if (sistersBrothers === 'yes' || sistersBrothers === 'y') {
    // console.log('Great! Your answer is correct.');
    alert('Great! Your answer is correct.');
    score++;
} else if (sistersBrothers === 'no' || sistersBrothers === 'n') {
    // console.log('Your answer is not correct');
    alert('Your answer is not correct');
} else {
    // console.log('Please anwser with yes or no'); 
    alert('Please anwser with yes/y or no/n');

}


let likeMusic = prompt('Do I like music?');
likeMusic = likeMusic.toLowerCase();


if (likeMusic === 'yes' || likeMusic === 'y') {
    // console.log('Great! Your answer is correct.');
    alert('Great! Your answer is correct.');
    score++;
} else if (likeMusic === 'no' || likeMusic === 'n') {
    // console.log('Your answer is not correct');
    alert('Your answer is not correct');
} else {
    //  console.log('Please anwser with yes or no');
    alert('Please anwser with yes/y or no/n');

}


let watchFootball = prompt('Do I watch football matches?');
watchFootball = watchFootball.toLowerCase();


if (watchFootball === 'yes' || watchFootball === 'y') {
    // console.log('Great! Your answer is correct.');
    alert('Great! Your answer is correct.');
    score++;
} else if (watchFootball === 'no' || watchFootball === 'n') {
    // console.log('Your answer is not correct');
    alert('Your answer is not correct');
} else {
    //  console.log('Please anwser with yes or no'); 
    alert('Please anwser with yes/y or no/n');

}



let wearingColors = prompt('Do I like wearing colors?');
wearingColors = wearingColors.toLowerCase();


if (wearingColors === 'yes' || wearingColors === 'y') {
    // console.log('Your answer is not correct');
    alert('Your answer is not correct');
} else if (wearingColors === 'no' || wearingColors === 'n') {
    // console.log('Great! Your answer is correct.');
    alert('Great! Your answer is correct.');
    score++;
} else {
    //  console.log('Please anwser with yes or no'); 
    alert('Please anwser with yes/y or no/n');

}

let number=5;
let guessNumber = prompt('Guess a number between 0 and 10?');
guessNumber = parseInt(guessNumber);
for (let i = 0; i < 3; i++) {
    if (guessNumber === number) {
        alert('Great! you are correct');
        score++;
        break;
    } else if (guessNumber < number) {
        prompt('This is too low, try another number');
    } else if (guessNumber > number) {
        prompt('This is too high, try another number');
    }
}
alert('The correct number is 5');

// let number=5;
// let maxAttempts=4; 
// let tries=0;
// let guessNumber=prompt('Guess a number between 0 and 10?');
// while (tries<=maxAttempts){ 
//     if (guessNumber === number) {
//         alert('Great! you are correct');
//         score++;
//         break;
//     } else if (guessNumber < number) {
//         prompt('This is too low, try another number');
//         tries++;
//     } else if (guessNumber > number) {
//         prompt('This is too high, try another number');
//         tries++
//     }else if( tries > maxAttempts){
//         alert('You have no more tries left.');
//     }




let favoriteColor = prompt('What do you think my favorite color is?\n red\nblack\nwhite\npink\nblue\npurple');
favoriteColor = favoriteColor.toLowerCase();
let colors = ['blue', 'black', 'purple'];
for (let i = 1; i < 6; i++) {
    if (favoriteColor === colors[0] || favoriteColor === colors[1] || favoriteColor === colors[2]) {
        alert('Great! your answer is correct');
        score++;
        break;
    }
    else {
        prompt('Guess another color');
    }
}
alert('You are run out of attempts!');

alert('We hope you enjoy the game ' + userName + ', your score is ' + score);
