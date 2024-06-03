// var numbers = [2, 5, 8, 9, 10];
// var userInput = Number(prompt("Enter your desire Number for checking the even or odd"));
// numbers.push(userInput);
// var evens = []
// var odds = []
// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         // console.log(numbers[i] % 2  )
//         evens.push(numbers[i]);
//     }
// }
// console.log(evens);

var emails = ["ahmer@gmail.com", 'ali@gmail.com', 'sheikh@gmail.com'];
var userInput = prompt('Enter ur email address');
var isFound = false;
for (var i = 0; i < emails.length; i++) {
    if (emails[i] === userInput) {
        console.log('login successfully!');
        isFound = true;
    }
    // else{
    //     console.log('login failed!');
    // }
}
if (!isFound) {
    console.log('login failed!');
}