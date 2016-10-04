function checkForm() {
	var user = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var correct = false;

	if (password==12345678) {
		if (user.length > 1) {
			alert("Everything is fine");s
		} else {
			alert("Your username is invalid.");
		}
	} else {
		alert("Your password is invalid.");
	}
}