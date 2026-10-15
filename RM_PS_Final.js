// 01. Solve Me First
const solveMeFirst = (a, b) => {
    return a + b;
}
console.log(solveMeFirst(5, 5));
console.log(solveMeFirst(10, 5));



//02. Multiply
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(5, 5));
console.log(multiply(10, 5));



// 03.Even or Odd
const evenOrOdd = (number) => {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log(evenOrOdd(6))
console.log(evenOrOdd(3))



// 04.Return Negative
const makeNegative = (number) => {
    if (number > 0) {
        return -number;
    }
    if (number < 0) {
        return number;
    }
    else {
        return number;
    }
}
console.log(makeNegative(5));
console.log(makeNegative(-5));
console.log(makeNegative(0));



// 05.Opposite Number
const opposite = (number) => {
    if (number > 0) {
        return -number;
    }
    if (number < 0) {
        return number - number - number;
    }
    else {
        return number;
    }
}
console.log(opposite(5))
console.log(opposite(-25))
console.log(opposite(0))



// 06.Simple Array Sum
const simpleArraySum = (numbers) => {
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    }
    return sum;
}
console.log(simpleArraySum([1, 2, 3, 4, 5]))


// 07.sleepIn
const sleepIn = (weekday, vocation) => {
    if (weekday === false || vocation === true) {
        return true;
    }
    else {
        return false
    }
}
console.log(sleepIn(true, false));
console.log(sleepIn(false, true));
console.log(sleepIn(true, true));
console.log(sleepIn(true, false));


// 08. monkeyTrouble
const monkeyTrouble = (monkey1, monkey2) => {
    if ((monkey1 === true && monkey2 === true) || (monkey1 !== true && monkey2 !== true)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(monkeyTrouble(true, true))


// 09. sumDouble
const sumDouble = (number1, number2) => {
    if (number1 === number2) {
        return (number1 + number2) * 2;
    }
    else {
        return number1 + number2;
    }
}
console.log(sumDouble(5, 5))
console.log(sumDouble(5, 4))