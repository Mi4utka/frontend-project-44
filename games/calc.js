import readlineSync from 'readline-sync';
import get_random from "/mnt/c/Users/Admin/Desktop/frontend-project-44/functions/ get_random.js"
import doMath from "/mnt/c/Users/Admin/Desktop/frontend-project-44/functions/doMath.js"
const operator = ['*', '+', '-']
  const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const calcGame = () => {
    let userName  = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    let currentFirstNumb = get_random(numb)
    let currentOperator = get_random(operator)
    let currentSecondNumb =get_random(numb)
let answer1 = readlineSync.question('What is the result of the expression?\nQuestion: ' + currentFirstNumb + ' ' + currentOperator + ' ' + currentSecondNumb + '\nYour answer: ')
if (answer1 === doMath(currentFirstNumb, currentOperator, currentSecondNumb)){
    currentFirstNumb = get_random(numb)
    currentOperator = get_random(operator)
    currentSecondNumb = get_random(numb)
    let answer2 = readlineSync.question('Correct!\nQuestion: '+ currentFirstNumb + ' ' + currentOperator + ' ' + currentSecondNumb + '\nYour answer: ')
    if (answer2 === doMath(currentFirstNumb, currentOperator, currentSecondNumb)){
        currentFirstNumb = get_random(numb)
    currentOperator = get_random(operator)
    currentSecondNumb = get_random(numb)
        let answer3 = readlineSync.question('Correct!\nQuestion: ' +currentFirstNumb + ' ' + currentOperator + ' ' + currentSecondNumb + '\nYour answer: ')
        if (answer3 === doMath(currentFirstNumb, currentOperator, currentSecondNumb)){
            console.log('Correct!\nCongratulations, ' + userName + '!')

    }
    else {
        console.log("'"+ answer3 + "'" + " is wrong answer ;(. Correct answer was '" + doMath(currentFirstNumb, currentOperator, currentSecondNumb) + "'.\nLet's try again, " + userName + '!')
    }

}
else {
    console.log("'"+ answer2 + "'" + " is wrong answer ;(. Correct answer was '" + doMath(currentFirstNumb, currentOperator, currentSecondNumb) + "'.\nLet's try again, " + userName + '!')
}
}
else {
    console.log("'"+ answer1 + "'" + " is wrong answer ;(. Correct answer was '" +doMath(currentFirstNumb, currentOperator, currentSecondNumb) + "'.\nLet's try again, " + userName + '!')
}
  }
  
  export default calcGame
