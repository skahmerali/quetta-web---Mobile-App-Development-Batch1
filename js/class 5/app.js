// var firstName = ['ajmal ', 'khan ', 'babar ', 'afridi ', 'akhtar '];
// var lastName = ['Pakistan', 'quetta', 'karachi'];

// for (var i = 0; i < firstName.length; i++) {
//     for (var j = 0; j < lastName.length; j++){
//         console.log(firstName[i] + lastName[j])
//     }
// }

var userInput = Number(prompt('how many lines you need for patterns'));
var result = '';
// for (var i = userInput ; i > 0; i--) {
//     // console.log("*")
//     for (var j = 1; j <= i; j++) {
//         // console.log("*")
//         result += '*';
//     }
//     result += '\n'
// }
// console.log(result)
for (var i = 0; i < userInput; i++) {
    for (var j = 0; j < userInput - i; j++) {
        result += ' ';
    }
    for (var k = 1; k <= i; k++) {
        // console.log("*")
        result += '*';
    }
    result += '\n'
}
console.log(result)
