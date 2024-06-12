var firstNames = [];
var lastNames = [];
var emails = [];
var passwords = [];
var isFound = false;
function signup() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var conifrmPassword = document.getElementById('conifrmPassword').value;

    for (var i = 0; i < emails.length; i++) {
        if (email === emails[i]) {
            console.log('sorry you cant signup with this email');
            return;
        }
    }
    if (password === conifrmPassword) {
        firstNames.push(firstName);
        lastNames.push(lastName);
        emails.push(email);
        passwords.push(password);
        alert('Sigunp Successfully !')
    } else {
        alert('Password and comfirm pass are not same!');
    }
    // console.log(firstName);
}

function login() {
    console.log('clicked')
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;
    for (var i = 1; i <= emails.length; i++) {
        if (loginEmail === emails[i] && loginPassword === passwords[i]) {
            console.log('login successfully')
            document.getElementById('result').innerHTML = firstNames[i] + " " + lastNames[i] + emails[i];
            isFound = true;
        }
    }
    if (isFound === false){
        alert('Email Or Passwrod Is Wrong! ')
    }

}