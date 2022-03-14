// Top to Bot Function
function topFunc() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function botFunc() {
	window.scrollTo(0, document.body.scrollHeight);
}

// Title

var data = [
"Free Office Subscription", "Power Play: car wash", "Noodelay",
"Forever ClawBot!", "Machine Learning", 
"No Don't", "I hope so", "peko!",
"It works!", "Red kinda sus", "yubi yubi!"
];
var title = data[Math.floor(Math.random() * data.length)];
document.getElementById("title").innerHTML = "<i>" + title + "</i>";
document.getElementById("web_title").innerHTML = title;

// pop up function
function popupFunc() {
	var popup = document.getElementById("popup_content");
	popup.classList.toggle("show");
}

// get email
function emailFunc() {
	document.getElementById("emailtag").innerHTML = "534b.noh at gmail";
}

// get discord
function discordFunc() {
	document.getElementById("discordtag").innerHTML = "sato# 8 8 3 8";
}