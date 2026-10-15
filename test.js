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
console.log(sumDouble(5,5))
console.log(sumDouble(5, 4))

// 10. diff21
const diff21 = (number) => {
    if (number <= 21) {
        return 21 - number;
    }
    if (number > 21) {
        return (number - 21) * 2;
    }
}
console.log(diff21(25))
console.log(diff21(6))

// 11. parrotTrouble
const parrotTrouble = (talking, hours) => {
    if (talking === true && hours <= 7) {
        return true;
    }
    else {
        return false;
    }
}
console.log(parrotTrouble(true, 4));
console.log(parrotTrouble(true, 9));

// 12. makes10
const makes10 = (a,b) => {
    if (a === 10 && b === 10) {
        return true;
    }
    if (a + b === 10) {
        return true;
    }
    else {
        return false;
    }
}
console.log(makes10(10, 10));
console.log(makes10(10, 20));
console.log(makes10(4, 6));