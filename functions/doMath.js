function doMath(x,znak,y){
    var math = 0;
    switch(znak) {
        case '+':
        math = x + y;
        break;
 
        case '-':
        math = x - y;
        break;
 
        case '*':
        math = x * y; 
        break;
    }
    return '' + math + ''
}
export default doMath