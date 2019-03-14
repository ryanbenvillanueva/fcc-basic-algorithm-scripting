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