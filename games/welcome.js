import readlineSync from 'readline-sync';

function func() {
  let userName  = readlineSync.question('May I have your name? ');
    console.log('Hello ' + userName + '!');
}
func()
export default func