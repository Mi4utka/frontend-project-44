import readlineSync from 'readline-sync';
import getRandomIntInclusive from '../functions/getRandomIntInclusive.js'
import isPrimeNumber from '../functions/isPrimeNumber.js';
const getRandomInt = () => getRandomIntInclusive(0, 100)
const isPrimeGame = () => {
    let userName  = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    let currentNumb = getRandomInt()
let answer1 = readlineSync.question('Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ' + currentNumb + '\nYour answer: ')
if (answer1 === isPrimeNumber(currentNumb)){
     currentNumb = getRandomInt()
    let answer2 = readlineSync.question('Correct!\nQuestion: ' + currentNumb + '\nYour answer: ')
    if (answer2 === isPrimeNumber(currentNumb)){
        currentNumb = getRandomInt()
        let answer3 = readlineSync.question('Correct!\nQuestion: ' + currentNumb + '\nYour answer: ')
        if (answer3 === isPrimeNumber(currentNumb)){
            console.log('Correct!\nCongratulations, ' + userName + '!')

    }
    else {
        console.log("'"+ answer3 + "'" + " is wrong answer ;(. Correct answer was '" + isPrimeNumber(currentNumb) + "'.\nLet's try again, " + userName + '!')
    }

}
else {
    console.log("'"+ answer2 + "'" + " is wrong answer ;(. Correct answer was '" + isPrimeNumber(currentNumb) + "'.\nLet's try again, " + userName + '!')
}
}
else {
    console.log("'"+ answer1 + "'" + " is wrong answer ;(. Correct answer was '" + isPrimeNumber(currentNumb) + "'.\nLet's try again, " + userName + '!')
}
}
export default isPrimeGame
