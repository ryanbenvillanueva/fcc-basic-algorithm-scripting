// Convert Temperature in degrees Celsius to Fahrenheit
function convertToF(celsius) {
    document.getElementById("fahrenheit").innerHTML = (celsius * 9 / 5) + 32;
}

// Reverse a String
function reverseString(str) {
    strArr = str.split("");
    reversedArr = strArr.reverse();
    reversedStr = reversedArr.join("");
    document.getElementById("reversed").innerHTML = reversedStr;
}

//Factorialize a Number
function factorialize(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        factorial = num * factorialize(num - 1);
        return factorial;
    }
}

document.getElementById("submit").addEventListener("click", function () {
    num = document.getElementById("numberToFactorialize").value;
    document.getElementById("factorial").innerHTML = factorialize(num);
});