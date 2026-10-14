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

