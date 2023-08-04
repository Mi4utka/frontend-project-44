import readlineSync from 'readline-sync';
const isllNumber = (number) => {
    if (number % 2 === 0) {
        return 'yes';
    }
    else {
        return 'no';
    }
}
const  randomNumber1 = Math.round(Math.random() * 10)
const  randomNumber2 = Math.round(Math.random() * 10)
const  randomNumber3 = Math.round(Math.random() * 10)
const brainev = () => {
    let userName  = readlineSync.question('May I have your name? ');
    console.log('Hello ' + userName + '!');
let answer1 = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ' + randomNumber1 + '\nYour answer: ')
if (answer1 === isllNumber(randomNumber1)){
    let answer2 = readlineSync.question('Correct!\nQuestion: ' + randomNumber2 + '\nYour answer: ')
    if (answer2 === isllNumber(randomNumber2)){
        let answer3 = readlineSync.question('Correct!\nQuestion: ' + randomNumber3 + '\nYour answer: ')
        if (answer3 === isllNumber(randomNumber3)){
            console.log('Correct!\nCongratulations ' + userName + '!')

    }
    else {
        console.log("'"+ answer3 + "'" + " is wrong answer ;(. Correct answer was '" + isllNumber(randomNumber3) + "'.\nLet's try again, " + userName)
    }

}
else {
    console.log("'"+ answer2 + "'" + " is wrong answer ;(. Correct answer was '" + isllNumber(randomNumber2) + "'.\nLet's try again, " + userName)
}
}
else {
    console.log("'"+ answer1 + "'" + " is wrong answer ;(. Correct answer was '" + isllNumber(randomNumber1) + "'.\nLet's try again, " + userName)
}
}

brainev()