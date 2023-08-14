import readlineSync from 'readline-sync';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

const getTenRandomNumbersInArray = () => { 
    let progressionValue = getRandomIntInclusive(1, 9) 
    let firstNumber = Math.round(Math.random() * 10)
    let array = []
    for (let i = 0; i <= 9; i += 1){
        array.push(firstNumber)
        firstNumber += progressionValue;
    }
    return array
    }
const makeOneMissing = (array, numberToBeMissing) => {
     Math.round(Math.random() * 9)
     let arrayCopy = [...array]
    arrayCopy[numberToBeMissing] = '..'
    return(arrayCopy.join(' '))
}

const brainProgression = () => {
let userName  = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    let currentArray = getTenRandomNumbersInArray()
    let currentNumberToBeMissing = Math.round(Math.random() * 10)
    let currentProgression = makeOneMissing(currentArray, currentNumberToBeMissing) 
let answer1 = readlineSync.question('What number is missing in the progression?\nQuestion: ' + currentProgression + '\nYour answer: ')
if (answer1 === '' + currentArray[currentNumberToBeMissing] + '' ) {
currentArray = getTenRandomNumbersInArray()
currentNumberToBeMissing = Math.round(Math.random() * 10)
currentProgression = makeOneMissing(currentArray, currentNumberToBeMissing) 
    let answer2 = readlineSync.question('Correct!\nQuestion: ' + currentProgression + '\nYour answer: ')
    if (answer2 === '' +currentArray[currentNumberToBeMissing] + '' ){
        currentArray = getTenRandomNumbersInArray()
currentNumberToBeMissing = Math.round(Math.random() * 10)
currentProgression = makeOneMissing(currentArray, currentNumberToBeMissing)
        let answer3 = readlineSync.question('Correct!\nQuestion: ' + currentProgression + '\nYour answer: ')
        if (answer3 === '' + currentArray[currentNumberToBeMissing]+ '' ){
            console.log('Correct!\nCongratulations, ' + userName + '!')

    }
    else {
        console.log("'"+ answer3 + "'" + " is wrong answer ;(. Correct answer was '" + currentArray[currentNumberToBeMissing] + "'.\nLet's try again, " + userName + '!')
    }

}
else {
    console.log("'"+ answer2 + "'" + " is wrong answer ;(. Correct answer was '" + currentArray[currentNumberToBeMissing] + "'.\nLet's try again, " + userName + '!')
}
}
else {
    console.log("'"+ answer1 + "'" + " is wrong answer ;(. Correct answer was '" + currentArray[currentNumberToBeMissing] + "'.\nLet's try again, " + userName + '!')
}
}
export default brainProgression