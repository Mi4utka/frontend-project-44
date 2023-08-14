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
    export default getTenRandomNumbersInArray