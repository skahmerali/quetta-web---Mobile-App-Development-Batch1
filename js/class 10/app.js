// var myName = "ahmer";
// const ahmer = (e) => {
//     console.log(myName)
// }
// ahmer()
// setInterval(ahmer, 1000 * 10);

// if (myName) {
//     console.log("this is correct")

// } else if (myName === 'ahmer') {
//     console.log("this is correct")

// } else {
//     console.log("this is correct")
// }

var getDay = new Date().getDay();
var weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
var dayOfWk = weeks[getDay];
// console.log(weeks[getDay]);
// for (var i = 0 ; i < weeks.length; i++){
//     console.log(getDay);

    // if(){
    //     dayOfWk = ''
    // }
// }
    // console.log(dayOfWk)
switch (dayOfWk) {
    case "Sat":
        alert("Whoopee");
        break;
    case "Sun":
        alert("Whoopee");
        break;
    case "Fri":
        // switch(getDay){
        //     case '5' :
        //         alert('hello world');
        //         break;
        //         default:
        //             alert('not hello to the world')
        // }
        alert("TGIF!");
        break;
    default:
        alert("Shoot me now!");
}
