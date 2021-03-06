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

document.getElementById("returnLargestNumbers").addEventListener("click", function () {
    document.getElementById("arrayOfLargest").innerHTML = largestOfFour([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1]
    ]);
});

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    if (str.substring(str.length - target.length) === target) {
        return true;
    } else {
        return false;
    }
}

document.getElementById("confirmEnding").addEventListener("click", function () {
    str = document.getElementById("stringToCheck").value;
    target = document.getElementById("target").value;
    document.getElementById("confirmation").innerHTML = confirmEnding(str, target);
});

// Repeat a String a Number of Times
function repeatStringNumTimes(str, num) {
    var repeatStr = "";
    if (num < 0) {
        return "";
    } else {
        for (let i = num; i > 0; i--) {
            repeatStr += str;
        }
    }
    return repeatStr;
}

document.getElementById("repeat").addEventListener("click", function () {
    str = document.getElementById("strToRepeat").value;
    num = document.getElementById("num").value;
    document.getElementById("repeatedString").innerHTML = repeatStringNumTimes(str, num);
});

// Truncate a string
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num && num > 3) {
        return str.slice(0, num) + '...';
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

document.getElementById("truncate").addEventListener("click", function () {
    str = document.getElementById("strToTruncate").value;
    num = document.getElementById("maxStringLength").value;
    document.getElementById("truncatedString").innerHTML = truncateString(str, num);
});

// Finders Keepers
function findElement(arr, func) {
    var trueCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            trueCount++;
            return arr[i];
        }
    }
    if (trueCount === 0) {
        return undefined;
    }
}

document.getElementById("findElement").addEventListener("click", function () {
    document.getElementById("found").innerHTML = findElement([1, 2, 3, 4], num => num % 2 === 0);
});

// BooWho
function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return typeof (bool) === "boolean" ? true : false;
}

document.getElementById("checkValue").addEventListener("click", function () {
    document.getElementById("booWhoResult").innerHTML = booWho(null);
});

// Title case a sentence
function titleCase(str) {
    var arrStr = str.toLowerCase().split(' ');

    for (var i = 0; i < arrStr.length; i++) {
        arrStr[i] = (arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1));
    }
    return (arrStr.join(" "));
}

document.getElementById("titleCase").addEventListener("click", function () {
    str = document.getElementById("strToTitleCase").value;
    document.getElementById("titledCase").innerHTML = titleCase(str);
});


// Slice and splice
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    console.log(arr1, arr2, n);
    let copyArr2 = arr2.slice(0);

    for (let i = 0; i < arr1.length; i++) {
        copyArr2.splice(n, 0, arr1[i]);
        n++;
    }
    return ("[" + copyArr2 + "]");
}

document.getElementById("returnNewArray").addEventListener("click", function () {
    arr1 = document.getElementById("arr1").value.split(",");
    arr2 = document.getElementById("arr2").value.split(",");
    n = document.getElementById("indexN").value;
    document.getElementById("newArray").innerHTML = frankenSplice(arr1, arr2, n);
});

// Falsy Bouncer
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return (arr.filter(function (truthy) {
        return truthy;
    }));

}
document.getElementById("removeFalsy").addEventListener("click", function () {
    document.getElementById("allTruthy").innerHTML = bouncer([7, "ate", "", false, 9]);
});

// Where do I belong
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    let sortedArr = arr.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < sortedArr.length; i++) {
        if (arr[i] >= num) {
            return i;
        }
    }
    return sortedArr.length;
}

document.getElementById("getIndex").addEventListener("click", function () {
    document.getElementById("indexToInsert").innerHTML = getIndexToIns([10, 20, 30, 40, 50], 35);
});

// Mutation
function mutation(arr) {
    let first = arr[0].toLowerCase();
    let second = arr[1].toLowerCase();

    let checked = [];
    for (let i = 0; i < second.length; i++) {
        if (first.indexOf(second[i]) < 0) {
            return false;
        }
    }
    return true;
}


document.getElementById("returnResult").addEventListener("click", function () {
    let arr = [];
    let first = document.getElementById("first").value;
    arr.push(first);
    let second = document.getElementById("second").value;
    arr.push(second);
    document.getElementById("mutation").innerHTML = mutation(arr);
});