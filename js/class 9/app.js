// var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestiae nisi dicta incidunt a doloremque id accusamus, fugiat provident maiores tenetur cum nam dolore ab debitis quaerat explicabo natus ut!"

// text = text.replace("doloremque", 'Pakistan Zindabad');

// console.log(text);

// var num = 28.4;
// console.log("before rounding a number", num);
// num = Math.round(num)
// console.log('after rounding a number', num);

// num = Math.ceil(num);
// console.log('ciel method', num)
// num = Math.floor(num);
// console.log('rounding to less floor method', num)


var newNum = Math.random();
console.log('before rounding', newNum);
newNum = newNum * 10;

newNum = Math.round(newNum);
console.log('after rounding', newNum);


var bigDecimal = Math.random();
console.log(bigDecimal * 6)
var improvedNum = (bigDecimal * 6) + 1;
console.log(improvedNum)
var numberOfStars = Math.floor(improvedNum);
console.log('Book example', numberOfStars);