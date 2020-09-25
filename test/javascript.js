function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'http://www.puzzlers.org/pub/wordlists/pocket.txt', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}

var data = [
"Free Office Subscription", "Power Play: car wash", "Noodelay",
"Forever ClawBot!", "Machine Learning", 
"No Don't", "I hope so", "peko!",
"It works!", "Red kinda sus", "yubi yubi!"
];
var title = data[Math.floor(Math.random() * data.length)];
document.getElementById("title").innerHTML = "<strong>" + title + "</strong>";