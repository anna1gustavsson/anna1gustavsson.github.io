



let passSave = "ux";



let passCount = 1;
let passMax = 3;

// this is what is called from the onsubmit
function checkPass() {

	let username = document.getElementById("userName").value;
	let passWord = document.forms["username"]["password"].value;
	

	// is user pass max passcounts?
	if (passCount <= passMax) {

		// Passwordcheck
		if (passWord != passSave) {
			console.log(passCount);
			//  counting the attempts left
			var attemptsLeft = 4 - passCount;

			//announs the attempts left
			document.getElementById("passStatus").innerHTML = "You have " + attemptsLeft + " attempts left!";

			passCount++;
			

			// if password is not correct
			return false;
		} else {
			//make the cookie
			document.cookie = "username=" + username;
			
			
			console.log("make cookie");
			// if password is correct, action happends
			window.location.href = "index.html";
			return true;
		}

	} else {
		// if the user tried too many times
		//inform the user of how its going for them
		document.getElementById("passStatus").innerHTML = "ACCESS DENIED";
		
		document.getElementById("passStatus").style.color = "red";
		return false;

	}
}

function makeCookie() {
	// this is how you make a cookie
	// its a way to save strings in for a "site"
	//document.cookie = "username=Anna";
	
	// 
	//	By default, the cookie is deleted when the browser is closed
	// 	add the expires tag with a date to set how long the cookie show last
	//console.log("make cookie");
	//when you make a cookie it will stay there for that site, refreshing the page normally wont remove it.
	// read more here: https://www.w3schools.com/js/js_cookies.asp
}




function getCookie() {
	// this is how you can get a cookie
	let cookie = document.cookie;
	// print it
	console.log(cookie);
	// get the value of the username out
	console.log(cookie.split("=")[1]);
	// split it on the "=" and use the second part
	// put it somewhere on a page
	document.getElementById("welcome").innerHTML = "Welcome " + cookie.split("=")[1];
}

// Welcome user


 //document.getElementById("welcome").innerHTML = "Welcome ";