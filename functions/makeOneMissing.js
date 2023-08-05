const makeOneMissing = (array, numberToBeMissing) => {
    Math.round(Math.random() * 9)
    let arrayCopy = [...array]
   arrayCopy[numberToBeMissing] = '..'
   return(arrayCopy.join(' '))
}