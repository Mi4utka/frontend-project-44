import readlineSync from 'readline-sync';
import gcd from 'functions/gcd.js'
function get_random(list) {
    return list[Math.floor((Math.random()*list.length))];
  }

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const numb11 = get_random(numb);
    const numb12 = get_random(numb);
    const numb21 = get_random(numb);
    const numb22 = get_random(numb);
    const numb31 = get_random(numb);
    const numb32 = get_random(numb);


const gcdGame = () => {
let userName  = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
let answer1 = readlineSync.question('Find the greatest common divisor of given numbers.\nQuestion: ' + numb11 + ' ' + numb12 + '\nYour answer: ')
if (answer1 === gcd(numb11, numb12)){
    let answer2 = readlineSync.question('Correct!\nQuestion: ' + numb21 + ' ' + numb22 + '\nYour answer: ')
    if (answer2 === gcd(numb21, numb22)){
        let answer3 = readlineSync.question('Correct!\nQuestion: ' + numb31 + ' ' + numb32 + '\nYour answer: ')
        if (answer3 === gcd(numb31, numb32)) {
            console.log('Correct!\nCongratulations, ' + userName + '!')

    }
    else {
        console.log("'"+ answer3 + "'" + " is wrong answer ;(. Correct answer was '" + gcd(numb31, numb32) + "'.\nLet's try again, " + userName + '!')
    }

}
else {
    console.log("'"+ answer2 + "'" + " is wrong answer ;(. Correct answer was '" + gcd(numb21, numb22) + "'.\nLet's try again, " + userName + '!')
}
}
else {
    console.log("'"+ answer1 + "'" + " is wrong answer ;(. Correct answer was '" +  gcd(numb11, numb12) + "'.\nLet's try again, " + userName + '!')
}
}

export default gcdGame;