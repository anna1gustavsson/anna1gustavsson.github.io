let passSave = "ux";


let passCount = 1;
let passMax = 3;

// this is what is called from the onsubmit
function checkPass() {

	
	let passWord = document.forms["formName"]["password"].value;
	

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
			// if password is correct, action happends
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