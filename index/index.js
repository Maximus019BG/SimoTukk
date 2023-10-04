function changeColor() {
  var x = document.getElementById("gfg");
  var y = document.getElementById("gfg1");
  var z = document.getElementById("gfg2");
  var u = document.getElementById("gfg3");
  var i = document.getElementById("gfg4");
  var o = document.getElementById("gfg5");

  x.style.color = "white";
  y.style.color = "white";
  z.style.color = "white";
  u.style.color = "white";
  i.style.color = "white";
  o.style.color = "white";

}


function changeColor2() {
var box   = document.getElementById("gfg");
var boxAfter = window.getComputedStyle(box ,"::after");
var c = console.log(boxAfter.backgroundColor);
c.style.color = "white";
}


window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';

changeColor();
changeColor2()
};