// title
var data = [
"Free Office Subscription", "Power Play: car wash", "Noodelay", 
"A large suc", "Forever ClawBot!", "Machine Learning", 
"No Don't", "yesn't", "I hope so", "Such tasty cok", "Zacian",
"It works!"
];
var one = data[Math.floor(Math.random() * data.length)];
document.getElementById("title").innerHTML = "<i>" + one + "</i>";

// auto dark-mode
var date = new Date();
var time = date.getHours();
if (time>=19) {
	document.getElementById("page").style.backgroundColor = 'rgb(50,50,50)';
	document.getElementById("title").style.color = 'rgb(205,205,205)';

	var AllEarlQuery = document.querySelectorAll(".earl");
	AllEarlQuery.style.color = 'rgb(205,205,205)';
}
