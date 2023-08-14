import readlineSync from 'readline-sync';

function func() {
  let userName  = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    console.log('Hello ' + userName + '!');
}
export default func