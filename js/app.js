'use strict';

let userName = prompt('Whats\'s your name?');
alert('Hello ' + userName + '\rWelcome to our website, let\'s have some fun!')



let foodLover = prompt('Am I a food lover (foodie person)?');
foodLover = foodLover.toLowerCase();

if (foodLover == 'yes' || foodLover == 'y') {
    // console.log('Great! Your answer is correct.');
    alert('Great! Your answer is correct.');
} else if (foodLover == 'no' || foodLover == 'n') {
    // console.log('Your answer is not correct');
    alert('Your answer is not correct');
} else {
    //  console.log('Please anwser with yes or no');
     alert('Please anwser with yes or no');  
}


let sistersBrothers = prompt('Do I have any sisters or brothers?');
sistersBrothers = sistersBrothers.toLowerCase();

if (sistersBrothers == 'yes' || sistersBrothers == 'y') {
    // console.log('Great! Your answer is correct.');
    alert('Great! Your answer is correct.');
} else if (sistersBrothers == 'no' || sistersBrothers == 'n') {
    // console.log('Your answer is not correct');
    alert('Your answer is not correct');
} else { 
    // console.log('Please anwser with yes or no'); 
    alert('Please anwser with yes or no');  

}


let likeMusic = prompt('Do I like music?');
likeMusic = likeMusic.toLowerCase();


if (likeMusic == 'yes' || likeMusic == 'y') {
    // console.log('Great! Your answer is correct.');
    alert('Great! Your answer is correct.');
} else if (likeMusic == 'no' || likeMusic == 'n') {
    // console.log('Your answer is not correct');
    alert('Your answer is not correct');
} else {
    //  console.log('Please anwser with yes or no');
     alert('Please anwser with yes or no');  

     }


let watchFootball = prompt('Do I watch football matches?');
watchFootball = watchFootball.toLowerCase();


if (watchFootball == 'yes' || watchFootball == 'y') {
    // console.log('Great! Your answer is correct.');
    alert('Great! Your answer is correct.');
} else if (watchFootball == 'no' || watchFootball == 'n') {
    // console.log('Your answer is not correct');
    alert('Your answer is not correct');
} else {
    //  console.log('Please anwser with yes or no'); 
    alert('Please anwser with yes or no');  

    }



let wearingColors = prompt('Do I like wearing colors?');
wearingColors = wearingColors.toLowerCase();


if (wearingColors == 'yes' || wearingColors == 'y') {
    // console.log('Your answer is not correct');
    alert('Your answer is not correct');
} else if (wearingColors == 'no' || wearingColors == 'n') {
    // console.log('Great! Your answer is correct.');
    alert('Great! Your answer is correct.');
} else {
    //  console.log('Please anwser with yes or no'); 
    alert('Please anwser with yes or no');  

    }


alert('We hope you enjoy the game ' + userName);
