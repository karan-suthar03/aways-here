
const firebaseConfig = {
    apiKey: "AIzaSyDjdHKJiE9_0-pGZTqfRWIc_YNvYh7dIyg",
    authDomain: "new-ascii-test.firebaseapp.com",
    projectId: "new-ascii-test",
    storageBucket: "new-ascii-test.appspot.com",
    messagingSenderId: "455636189959",
    appId: "1:455636189959:web:ceb7d59a1702505e86bba2",
    measurementId: "G-F38CHL5MY7"
};

firebase.initializeApp(firebaseConfig);
var num;
var numValue;
const dbRef = firebase.database().ref("button-trigger");
const dbnum = firebase.database().ref("num");
const dbmsg = firebase.database().ref("msg");
const dbflag = firebase.database().ref("flag");
const dmsgs = firebase.database().ref("msgs");
var input = document.getElementById("inputt");
dbnum.on("value", (snapshot) => {
    const numValue = snapshot.val();
    console.log("Value changed to: " + numValue);
	num = numValue;
	document.getElementById("my-button").addEventListener("click",() => {
		
	});
    // Your code to change the background color of the app goes here
});
dbflag.on("value", (snapshot) => { 
	var hehe = snapshot.val();
	if(hehe){
		document.getElementById("notify").innerHTML = "notification: on";
	}else{
		document.getElementById("notify").innerHTML = "notification: off";
	}
	
	console.log(hehe);
});

var username;
input.addEventListener("input", function() {
    // Your code here
	
	var text = input.value;
	if(text == "karan69" || text == "Karan69" ){
		dmsgs.set("");
		username = "karan";
		window.location.href = "kiki/hehe.html?data=" + username;
	}
	else if(text == "chanchal00" || text == "Chanchal00"){
		dmsgs.set("");
		username = "chanchal00";
		window.location.href = "kiki/hehe.html?data=" + username;
	}
	dmsgs.set(text);
	
});
// add an event listener to the button
document.getElementById("my-button").addEventListener("click", () => {
    // generate a random number between 0 and 999
   const currentTime = new Date();
if(num != 0){
			var newnum = num+1;
			newnum.toString();
			dbnum.set(newnum);
		}else{
			dbnum.set(1);
		}
let hours = currentTime.getHours();
const minutes = currentTime.getMinutes().toString().padStart(2, '0');
const seconds = currentTime.getSeconds().toString().padStart(2, '0');
let amOrPm = hours < 12 ? 'AM' : 'PM';

if (hours === 0) {
  hours = 12;
} else if (hours > 12) {
  hours -= 12;
}

const formattedHours = hours.toString().padStart(2, '0');
const randomValue = `${formattedHours} ${minutes} ${seconds} ${amOrPm}`;
    
    // update the database with the random number
    dbRef.set(randomValue);
});
dbmsg.on("value", (snapshot) => {
  const data = snapshot.val();
  var ok = data;
  document.getElementById("msg").innerHTML = ok;
  
  console.log(data);
});

dbRef.on("value", (snapshot) => {
    const randomValue = snapshot.val();
    console.log("Value changed to: " + randomValue);

    // Your code to change the background color of the app goes here
});
