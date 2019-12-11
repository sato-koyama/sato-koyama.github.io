// title
var data = [
"Free Office Subscription", "Power Play: car wash", "Noodelay", 
"A large suc", "Forever ClawBot!", "Machine Learning", 
"No Don't", "yesn't", "I hope so", "Such tasty cok", "Zacian",
"It works!", "Where the wind blows"
];
var one = data[Math.floor(Math.random() * data.length)];
document.getElementById("title").innerHTML = one;

// auto dark-mode
console.log("checking mode.");
var date = new Date();
var time = date.getHours();
console.log("date: " + date);
console.log("\n");

// text color convert
if (time>18) {

	console.log("*");
	console.log("**");
	console.log("***");
	console.log("\n");
	console.log("initiating dark mode.");

	document.getElementById("style").href = "dark_master_css.css";
} else {
	console.log("daytime.")
}