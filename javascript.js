// title

var rand = Math.floor(Math.random() * 10) + 1;

if (rand==1) {
	document.getElementById("title").innerHTML = "Free Office Subscription.";
}
else {
	document.getElementById("title").innerHTML = "What else."
}

// css date
var date = new Date();
var time = date.getHours();
if (time>=18) {
	document.getElementById("page").style.backgroundColor = 'rgb(50,50,50)';
	document.getElementById("title").style.color = 'rgb(205,205,205)';

	var AllEarlQuery = document.querySelectorAll(".earl");
	AllEarlQuery.style.color = 'rgb(205,205,205)';
}


// 

document.getElementById("secret").innerHTML = secretPrompt();

function secretPrompt() {
	var access = document.getelementById("secret").disabled = true;
	var login = prompt("Log in","");
	if (login=="1234") {
		document.getElementById("secret").disabled = false;
	}
	else {
		document.getElementById("secret").disabled = true;
	}
} 