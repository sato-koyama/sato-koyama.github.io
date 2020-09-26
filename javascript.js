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

