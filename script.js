var today = new Date();
var day = today.getDay();
var dayList = ['Sunday','Monday','Tuesday','Wednessday','Thursday','Friday','Saturday']

document.querySelector(".day").innerHTML = "Today is : " + dayList[day];

var hour = today.getHours(); 
var minute = today.getMinutes();
var second = today.getSeconds();
var millisecond = today.getMilliseconds();

document.querySelector(".time").innerHTML = "Current time is : " + hour  + " : " + minute + " : " + second + " : " + millisecond;


console.log("Current time is : " + hour  + prepand + " : " + minute + " : " + second + " : " + millisecond);




