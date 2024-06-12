// console.log(userName);

// let userName = "ahmer"
// console.log(userName);


// function is a first class citizen ;
// function userInput(e, f)  { //userName is a perameter
//     console.log(e);
//     console.log(f);
// }
// var ahmer = 'ahmer'
// userInput(ahmer, 'ali'); //arguement
var userNames = [];
function userData() {
    // console.log("hello world");
    var userName = document.getElementById('firstName').value;
    userNames.push(userName)
    var male = document.getElementById('male').value
    var female = document.getElementById('female').value
    // var gender = false;
    // if (male) {
    //     gender = true
    // }else{
    //     gender = false;
    // }
    // console.log(userName)
    // console.log(male)
    // console.log(female)
    console.log(userNames)
    document.getElementById("result").innerHTML = userNames;

}