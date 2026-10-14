// 01. Solve Me First
const sumOfIntegers = (a, b) => {
    return a + b;
}
console.log(sumOfIntegers(5, 5));
console.log(sumOfIntegers(10, 5));



//02. Multiply
const multiplyOfIntegers = (a, b) => {
    return a * b;
}
console.log(multiplyOfIntegers(5, 5));
console.log(multiplyOfIntegers(10, 5));



// 03.Even or Odd
const checkEvenOrOdd = (number) => {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log(checkEvenOrOdd(6))
console.log(checkEvenOrOdd(3))



// 04.Return Negative
const returnNegetive = (number) => {
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
console.log(returnNegetive(5));
console.log(returnNegetive(-5));
console.log(returnNegetive(0));



// 05.Opposite Number
const OppositeNumber = (number) => {
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
console.log(OppositeNumber(5))
console.log(OppositeNumber(-25))
console.log(OppositeNumber(0))



// 06.Simple Array Sum
const arraySum = (numbers) => {
    let sum = 0;
    for (let i of numbers) {
        sum += i;
    }
    return sum;
}
console.log(arraySum([1, 2, 3, 4, 5]))


// 07.sleepIn
const isVocation = (weekday, vocation) => {
    if (weekday === false || vocation === true) {
        return true;
    }
    else {
        return false
    }
}
console.log(isVocation(true, false));
console.log(isVocation(false, true));
console.log(isVocation(true, true));
console.log(isVocation(true, false));