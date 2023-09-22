//? <---------- ARRAYS AND LOOP ---------->

//! QUESTION NO 01

// const emptyMultiArray = [];
// console.log(emptyMultiArray);

//! QUESTION NO 02

// var matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];

// for (var i = 0; i < matrix.length; i++) {
//   document.write(matrix[i].join(" "));
//   var innerarr = matrix[i];
//   document.write("<br>");

//   for (var j = 0; j < innerarr; i++) {
//     document.write(matrix[j]);
//   }
// }

//! QUESTION NO 03

// for (var i = 1; i <= 10; i++) {
//   document.write(i + "<br>");
// }

//! QUESTION NO 04

// var num = +prompt("Enter a Number to show its Multiplication table");
// var length = +prompt("Enter Length of Multiplication tabke");

// num = parseInt(num);
// length = parseInt(length);

// if (isNaN(num) || isNaN(length)) {
//   document.write("Please Enter a Valid Number!");
// }

// document.write("Multiplication table of " + num + "<br>");
// document.write("Length " + length + "<br><br>");

// for (var i = 1; i <= length; i++) {
//   var result = num * i;

//   document.write(num + " x " + i + " = " + result + "<br>");
// }

//! QUESTION NO 05

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }

// document.write("<br>");

// fruits.forEach(function (val, index) {
//   document.write("Element at Index " + index + " is " + val + "<br>");
// });

//! QUESTION NO 06

// //todo  (Part a)

// document.write("<h3> Counting: </h3>");

// for (var i = 1; i <= 15; i++) {
//   document.write([i] + ", ");
// }

// //todo  (Part b)

// document.write("<h3> Reverse Counting: </h3>");

// for (var i = 10; i >= 1; i--) {
//   document.write([i] + ", ");
// }

// //todo  (Part c)

// document.write("<h3> Even: </h3>");

// for (var i = 0; i <= 20; i += 2) {
//   document.write([i] + ", ");
// }

// //todo  (Part d)

// document.write("<h3> Odd: </h3>");

// for (var i = 1; i <= 19; i += 2) {
//   document.write([i] + ", ");
// }

// //todo  (Part e)

// document.write("<h3> Series: </h3>");

// for (var i = 1; i <= 10; i++) {
//   series = 2 * i;
//   document.write(series + "k, ");
// }

//! QUESTION NO 07

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt(
//   "Welcom to ABC Bakery. What do you want to order sir/ ma'am?"
// );

// function findItemIndex(item, array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === item) {
//       return i;
//     }
//   }
//   return -1;
// }

// var itemIndex = findItemIndex(userInput, A);

// if (itemIndex !== -1) {
//   document.write(
//     userInput + " is <b>available </b>at index " + itemIndex + " in our Bakery"
//   );
// } else {
//   document.write(
//     "We are Sorry. " + userInput + " is <b>not available</b> in our Bakery "
//   );
// }

//! QUESTION NO 08

// var A = [24, 53, 78, 91, 12];

// var largestNumber = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largestNumber) {
//     largestNumber = A[i];
//   }
// }

// document.write("Array items: " + A + "<br>");
// document.write("The largest number is " + largestNumber);

//! QUESTION NO 09

// var A = [24, 53, 78, 91, 12];

// var smallestNumber = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] < smallestNumber) {
//     smallestNumber = A[i];
//   }
// }

// document.write("Array items: " + A + "<br>");
// document.write("The Smallest number is " + smallestNumber);

//! QUESTION NO 10

// for (var i = 1; i <= 20; i++) {
//   var multipleOf5 = i * 5;
//   document.write(multipleOf5 + ",");
// }

//? <---------- STRING METHODS ---------->

//! QUESTION NO 01

// var firstName = prompt("Enter Your First Name.");

// var lastName = prompt("Enter Your Last Name.");

// var fullName = firstName + " " + lastName;

// alert(fullName);

//! QUESTION NO 02

// var userInput = prompt("Enter your Favourite Phone.");

// document.write("My Favourite Phone is: " + userInput + "<br>");

// document.write("Length of String: " + userInput.length);

//! QUESTION NO 03

// var word = "Pakistani";

// var index = word.indexOf("n");

// document.write("String: " + word + "<br>");
// document.write("Index of 'n' is: " + index);

//! QUESTION NO 04

// var word = "Hello World";

// var lastindex = word.lastIndexOf("l");

// document.write("String: " + word + "<br>");
// document.write("Last Index of 'l' is: " + lastindex);

//! QUESTION NO 05

// var word = "Pakistani";

// var findCharacter = word.charAt(3);

// document.write("String: " + word + "<br>");
// document.write("Character at Index 3 is: " + findCharacter);

//! QUESTION NO 06

// var firstName = prompt("Enter Your First Name.");

// var lastName = prompt("Enter Your Last Name.");

// var fullName = firstName.concat(" ", lastName);

// alert(fullName);

//! QUESTION NO 07

// var word = "Hyderabad";

// var replaceWord = word.replace("Hyder", "Islam");

// document.write("City: " + word + "<br>");
// document.write("After Replacement: " + replaceWord);

//! QUESTION NO 08

// var message =
//   "Ali and Sami are best friend. They Play Cricket and Football Together.";

// var replaceWord = message.replace(/and/g, "&");

// document.write("Message: " + message + "<br>");
// document.write("After Replacement: " + replaceWord);

//! QUESTION NO 09

// var str = "472";

// document.write("Value: " + str + "<br>" + "Type: " + typeof str + "<br>");

// var num = Number(str);

// document.write("Value: " + str + "<br>" + "Type: " + typeof num);

//! QUESTION NO 10

// var userInput = prompt("Enter any String.");

// var convertIntoCapital = userInput.toUpperCase();

// document.write("User Input: " + userInput + "<br>");
// document.write("Upper Case: " + convertIntoCapital);

//! QUESTION NO 11

// var userInput = prompt("Enter any String.");

// function toTitleCase(inputString) {
//   return inputString.replace(/\w\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }

// const convertIntoTitle = toTitleCase(userInput);

// document.write("User Input: " + userInput + "<br>");
// document.write("Title Case: " + convertIntoTitle);

//! QUESTION NO 12

// var num = "35.36";

// document.write("Number: " + num + "<br>");

// var numAsString = num.toString().replace(".", "");

// document.write("Result: " + numAsString);

//! QUESTION NO 13

// var userInput = prompt("Enter Your UserName.");

// function containSpecialSymbols(userInput) {
//   var specialSymbols = ["@", ".", ",", "!"];

//   for (var i = 0; i < specialSymbols.length; i++) {
//     if (userInput.includes(specialSymbols[i])) {
//       return true;
//     }
//   }
//   return false;
// }

// if (containSpecialSymbols(userInput)) {
//   alert("Please enter a valid username ");
// } else {
//   alert("Username is valid: " + userInput);
// }

//! QUESTION NO 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt(
//   "Welcom to ABC Bakery. What do you want to order sir/ ma'am?"
// ).toLowerCase();

// function findItemIndex(item, array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i].toLowerCase() === item) {
//       return i;
//     }
//   }
//   return -1;
// }

// var itemIndex = findItemIndex(userInput, A);

// if (itemIndex !== -1) {
//   document.write(
//     userInput + " is <b>available</b> at index " + itemIndex + " in our Bakery"
//   );
// } else {
//   document.write(
//     "We are Sorry. " + userInput + " is <b>not available</b> in our Bakery "
//   );
// }

//! QUESTION NO 15

function isPasswordValid(password) {
  if (password.length < 6) {
    return false;
  }

  var containAlphabets = /[a-zA-Z]/.test(password);
  var containNumbers = /[0-9]/.test(password);

  var startsWithLetter = /[a-zA-Z]/.test(password.charAt(0));

  return containAlphabets && containNumbers && startsWithLetter;
}

var userInput = prompt("Enter a Password: ");
document.write("Entered Password: " + userInput + "<br>");

if (isPasswordValid(userInput)) {
  document.write("Valid Password!");
} else {
  document.write(
    "Password can not begin with a number <br> please Enter a Valid Password."
  );
}
