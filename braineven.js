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
answer1 = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ' + randomNumber)
if (answer1 === isllNumber(randomNumber1)){
    answer2 = readlineSync.question('Correct\nQuestion: ' + randomNumber2)
    if (answer2 === isllNumber(randomNumber2)){
        answer3 = readlineSync.question('Correct\nQuestion: ' + randomNumber2)
        if (answer3=== isllNumber(randomNumber3)){
            console.log('Correct\nCongratulations ' + Username)

    }

}
}
else {answer1 + "is wrong answer ;(. Correct answer was" + isllNumber(randomNumber1) + ".\nLet's try again, Bill!"}
}
brainev()