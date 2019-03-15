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

// Factorialize a Number
function factorialize(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        factorial = num * factorialize(num - 1);
        return factorial;
    }
}

document.getElementById("factorialize").addEventListener("click", function () {
    num = document.getElementById("numberToFactorialize").value;
    document.getElementById("factorial").innerHTML = factorialize(num);
});

// Find the Longest Word in a String
function findLongestWordLength(str) {
    // split the string into an array of words
    wordArray = str.split(" ");
    // set first word as longest.
    longest = wordArray[0];
    // loop through the array to search for the longest word.
    for (i = 1; i < wordArray.length; i++) {
        if (wordArray[i].length > longest.length) {
            longest = wordArray[i];
        }
    }
    return ('The longest word is \"' + longest + '\" and its length is ' + longest.length + '.');
}

document.getElementById("findLongest").addEventListener("click", function () {
    str = document.getElementById("stringGiven").value;
    document.getElementById("longestWord").innerHTML = findLongestWordLength(str);
});

function largestOfFour(arr) {
    var arrayOfLargest = [];
    for (var i = 0; i < arr.length; i++) {
      var largest = arr[i][0];
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] > largest) {
          largest = arr[i][j]; 
        }
      }
      arrayOfLargest.push(largest);
    }
    
    return ('[' + arrayOfLargest + ']');
  }
  
//    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  document.getElementById("returnLargestNumbers").addEventListener("click", function () {
    // arr = document.getElementById("arrayGiven").value;
    document.getElementById("arrayOfLargest").innerHTML = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
});