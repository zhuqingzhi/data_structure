const Stack = require('./stack')
const stack = new Stack()
/* stack.push(1)
stack.push(3)
stack.push(5)
console.log('stack--length', stack.length, stack.peek())
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log('stack--length', stack.length, stack.peek()) */

/* // 十进制转任意进制
function convertBase(num, base) {
    const stack = new Stack();
    while (num % base != 0||num!==0) {
        stack.push(num % base)
        num = Math.floor(num/base)
    }
    let res = ''
    while (stack.length) {
        res+=stack.pop()
    }
    return res
}
console.log('convert',convertBase(8,2)) */

//阶乘 5!=120
/* function getFactorial(n) {
    if (n < 0) return
    if (n < 2) return 1
    while (n >= 2) {
        return n*getFactorial(n-1)
    }
}
console.log(getFactorial(5)) */

/* // 栈模拟递归
function getFactorialByStack(n) {
    let res = 1;
    const stack = new Stack()
    function getFactorial(n) {
        if (n < 0) return
        if (n < 2) return stack.stackList.push(1);
        while (n >= 2) {
            stack.push(n)
            n -= 1;
        }
    }
    getFactorial(n)
    while (stack.length) {
        res*=stack.pop()
    }
    return res;
}
console.log(getFactorialByStack(0)) */

// 练习
/* 栈可以用来判断一个算术表达式中的括号是否
匹配。编写一个函数，该函数接受一个算术表
达式作为参数，返回括号缺失的位置。下面是
一个括号不匹配的算术表达式的例子：2.3 + 23 /
    12 + (3.14159 0.24。 */
/* 
step1:遇到左括号入栈，并记录所在字符串的下标，遇到其他不入栈
step2:遇到右括号出栈，并且依次出栈，直到遇到一个左括号，将一个左括号出栈
step3:继续1步骤，直到字符串遍历完成
step4:遍历栈中剩余的括号，并且输出其下标

*/
/* const expression = '2.3 + (23 / 12 + (22*5)+((1+2+(2-1))'// 期望：6,24
function getBracketsIndex(expression) {
    const stack = new Stack();
    const strArr = expression.split('')
    for (var i = 0; i < strArr.length; i++){
        const charItem = strArr[i]
        if (charItem === '(') {
            stack.push({
                char: charItem,
                charIndex: i
            })
        }
        if (charItem === ')') {
            //出栈
            stack.pop()
        }

    }
    let res = ''
    while (stack.length) {
        res+=stack.pop().charIndex+','
    }
    return res
}
console.log('期望的下标是:',getBracketsIndex(expression)) */

/* 
一个算术表达式的后缀表达式形式如下：
op1 op2 operator
使用两个栈，一个用来存储操作数，另外一个
用来存储操作符，设计并实现一个JavaScript函
数，该函数可以将中缀表达式转换为后缀表达
式，然后利用栈对该表达式求值。

*/

function convertInfixToSuffixExpre(infixExpression) {
    const strArr = infixExpression.split('')
    
}







