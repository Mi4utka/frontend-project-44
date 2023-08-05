import readlineSync from 'readline-sync';


 const shablon = () => {
    let userName  = readlineSync.question('May I have your name? ');
    console.log('Hello ' + userName + '!');
let answer1 = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ' + randomNumber1 + '\nYour answer: ')
if (answer1 === isEvenNumber(randomNumber1)){
    let answer2 = readlineSync.question('Correct!\nQuestion: ' + randomNumber2 + '\nYour answer: ')
    if (answer2 === isEvenNumber(randomNumber2)){
        let answer3 = readlineSync.question('Correct!\nQuestion: ' + randomNumber3 + '\nYour answer: ')
        if (answer3 === isEvenNumber(randomNumber3)){
            console.log('Correct!\nCongratulations ' + userName + '!')

    }
    else {
        console.log("'"+ answer3 + "'" + " is wrong answer ;(. Correct answer was '" + isEvenNumber(randomNumber3) + "'.\nLet's try again, " + userName + '!')
    }

}
else {
    console.log("'"+ answer2 + "'" + " is wrong answer ;(. Correct answer was '" + isEvenNumber(randomNumber2) + "'.\nLet's try again, " + userName + '!')
}
}
else {
    console.log("'"+ answer1 + "'" + " is wrong answer ;(. Correct answer was '" + isEvenNumber(randomNumber1) + "'.\nLet's try again, " + userName + '!')
}
}





