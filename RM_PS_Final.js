// 01. Solve Me First
var solveMeFirst = function (a, b) {
    return a + b;
};

// 02. Multiply
var multiply = function (a, b) {
    return a * b;
};

// 03. Even or Odd
var evenOrOdd = function (number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
};

// 04. Return Negative
var makeNegative = function (number) {
    if (number > 0) {
        return -number;
    }
    if (number < 0) {
        return number;
    }
    else {
        return number;
    }
};

// 05. Opposite Number
var opposite = function (number) {
    if (number > 0) {
        return -number;
    }
    if (number < 0) {
        return -number;
    }
    else {
        return number;
    }
};

// 06. Simple Array Sum
var simpleArraySum = function (ar) {
    let sum = 0;
    for (let i of ar) {
        sum += i;
    }
    return sum;
};

// 07. sleepIn
var sleepIn = function (weekday, vacation) {
    if (weekday === false || vacation === true) {
        return true;
    }
    else {
        return false;
    }
};

// 08. monkeyTrouble
var monkeyTrouble = function (aSmile, bSmile) {
    if ((aSmile === true && bSmile === true) || (aSmile !== true && bSmile !== true)) {
        return true;
    }
    else {
        return false;
    }
};

// 09. sumDouble
var sumDouble = function (a, b) {
    if (a === b) {
        return (a + b) * 2;
    }
    else {
        return a + b;
    }
};

// 10. diff21
var diff21 = function (n) {
    if (n <= 21) {
        return 21 - n;
    }
    if (n > 21) {
        return (n - 21) * 2;
    }
};

// 11. parrotTrouble
var parrotTrouble = function (talking, hour) {
    if (talking === true && (hour < 7 || hour > 20)) {
        return true;
    }
    else {
        return false;
    }
};

// 12. makes10
var makes10 = function (a, b) {
    if (a === 10 || b === 10) {
        return true;
    }
    if (a + b === 10) {
        return true;
    }
    else {
        return false;
    }
};

// 13. nearHundred
var nearHundred = function (n) {
    if ((Math.abs(100 - n) <= 10) || (Math.abs(200 - n) <= 10)) {
        return true;
    }
    else {
        return false;
    }
};

// 14. posNeg
var posNeg = function (a, b, negative) {
    if (negative === true) {
        if (a < 0 && b < 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        if ((a > 0 && b < 0) || (b > 0 && a < 0)) {
            return true;
        }
        else {
            return false;
        }
    }
};

// 15. notString
var notString = function (str) {
    if (str.startsWith("not")) {
        return str;
    }
    else {
        return "not " + str;
    }
};

// 16. Compare the Triplets
var compareTriplets = function (a, b) {
    let scoreA = 0;
    let scoreB = 0;
    let array = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            scoreA++;
        }
        if (a[i] < b[i]) {
            scoreB++;
        }
    }
    array.push(scoreA);
    array.push(scoreB);
    return array;
};

// 17. A Very Big Sum
var aVeryBigSum = function (ar) {
    let sum = 0;
    for (let i of ar) {
        sum += i;
    }
    return sum;
};

// 18. Staircase
var staircase = function (n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let hashes = "#".repeat(i);
        result += spaces + hashes;

        if (i < n) {
            result += "\n";
        }
    }
    return result;
};

// 19. Grading Students
var gradingStudents = function (grades) {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        }
        let reminder = grade % 5;
        if (reminder >= 3) {
            return grade += 5 - reminder;
        }
        return grade;
    })
};

// 20. Time Conversion
var timeConversion = function (s) {
    let amPm = s.slice(-2);
    let hour = s.slice(0, 2);
    let restOfTime = s.slice(2, -2);

    if (amPm === "AM" && hour === "12") {
        hour = "00";
    } else if (amPm === "PM" && hour !== "12") {
        hour = String(Number(hour) + 12);
    }

    return hour + restOfTime;
};

// 21. String Repeat 
var repeatStr = function(n, s) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        str = str.concat("", s);
    }
    return str;

}


// 22. Reversed Strings
var solution = function (str) {
    let s = "";
    for (let i = str.length; i >= 0; i--) {
        s += str.charAt(i);
    }
    return s;
};


// 23. Sum of Positive
var positiveSum = function (arr) {
    let sum = 0;
    for (let i of arr) {
        if (i > 0) {
            sum += i;
        }
    }
    return sum;
};

// 24. Grasshopper - Summation
var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
};

// 25. Convert a Boolean to a String
var booleanToString = function (b) {
    if (typeof b === "boolean") {
        return b.toString();
    }
};