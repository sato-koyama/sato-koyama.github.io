// I KNOW THIS ISN'T THE BEST WAY TO DO THIS AND IT'S PROBABLY CLEANER
// TO MAKE THE INDEX NUMBER AS A MATRIX/VECTOR AND THEN MAKE IT
// A SINGLE FUNCTION
// BUT I DON'T EXACTLY KNOW HOW TO DO THAT 
// AND I DON'T LIKE JAVASCRIPT DUE TO THE LANGUAGE SYNTAX
// PLEASE UNDERSTAND THAT I'M STILL NEW TO JAVASCRIPT 
// AND UWU, I DONT KNOW. I HAVENT GOTTEN MUCH SLEEP
// if it ain't broke, then it ain't broke.

var Index_po = 0;
slideshow_po();
function slideshow_po() {
  var i;
  var x = document.getElementsByClassName("images_po");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  Index_po++;
  if (Index_po > x.length) {Index_po = 1}    
  x[Index_po-1].style.display = "block"; 
  setTimeout(slideshow_po, 2000);
}
var Index_pr = 0;
slideshow_pr();
function slideshow_pr() {
  var j;
  var y = document.getElementsByClassName("images_pr");
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  Index_pr++;
  if (Index_pr > y.length) {Index_pr = 1}    
  y[Index_pr-1].style.display = "block"; 
  setTimeout(slideshow_pr, 2000);
}
var Index_ab = 0;
slideshow_ab();
function slideshow_ab() {
  var k;
  var z = document.getElementsByClassName("images_ab");
  for (k = 0; k < z.length; k++) {
    z[k].style.display = "none";  
  }
  Index_ab++;
  if (Index_ab > z.length) {Index_ab = 1}    
  z[Index_ab-1].style.display = "block"; 
  setTimeout(slideshow_ab, 2000);
}

