var keypress = false;
document.addEventListener("keypress", function(event){ 
	if (!keypress) document.getElementById("key").innerHTML = ""
	document.getElementById("key").innerHTML += event.key
	keypress = true;
});
