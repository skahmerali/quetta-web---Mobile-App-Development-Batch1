// var userEmail = prompt("Enter your email address");

// userEmail = userEmail.toLocaleLowerCase();
// console.log(userEmail)
// if (userEmail === 'ahmer@gmail.com'){
//     console.log("login successfully!")
// }else{
//     console.log("login failed!")
// }

// console.log(userEmail.slice(0, userEmail.length))

// var num1 = 12;
// var num2 = 5;


// num1 = num1 + num2; // 12+5 = 17
// num2 = num1 - num2; // 17 - 5 = 12
// num1 = num1 - num2; // 17 - 12 = 5
// // num1 = num2;
// // num2 = num1
// // [num1, num2] = [num2, num1];

// console.log(num1, 'this is num 1 '); //5
// console.log(num2, 'this is num 2 '); //12

// if()

// logical assignment till the next class
// var number = 'abcd'

// console.log(number) // 'a1b2c3d4'

var text = "Lorem ipsum dolor sit amet, World War II consectetur adipisicing elit. Reiciendis, soluta incidunt! Quam eum explicabo nam animi facere esse natus corrupti World War II maxime impedit vero laudantium voluptatum exercitationem, quidem World War II tempore cumque beatae.";
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         console.log(i)
//         console.log(text.slice(0, i))
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }

for (var i = 0; i < text.length; i++) {
    var firstChar = text.indexOf("World War II");
    console.log(firstChar)
    if (firstChar !== -1) {
        console.log(text.slice(0, firstChar))
        text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
    }
}
// {var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be");}


console.log(text)