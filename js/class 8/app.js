// var firstName = 'ahmer';
// var charAt = firstName.charAt(firstName.length - 3);
// console.log(charAt);

var password = 20515;
console.log(typeof password)

for (var i = 0; i < password.length; i++) {

    if (typeof password.charAt(i) != 'number') {
        console.log('sorry there is no number');

        // console.log(typeof password.charAt(i))
        // console.log(password.charAt(i))
    } else {
        console.log(password[i])
    }
}