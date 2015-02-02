$(function() {
	$(".menu-btn").click(function() {
		$(".menu").toggleClass("active");
	});
});



/*
var link = document.querySelector(".menu-btn");
link.addEventListener('click', function() {
	if (".menu".classList) {
  (".menu").classList.toggle(tog);
} else {
  var classes = (".menu").tog.split(" ");
  var existingIndex = classes.indexOf(active);

  if (existingIndex >= 0)
    classes.splice(existingIndex, 1);
  else
    classes.push(active);

  ".menu".active = classes.join("");
};
});*/





/*var menubtn = document.querySelector(".menu-btn");
var active = document.querySelector(".menu");

menubtn.addEventListener("click", function (event) {
	event.preventDefault();
	if (".menu")
	active.classList.add("active");
});
*/
/*if (".menu".classList) {
  (".menu").classList.toggle("active");
} else {
  var classes = (".menu").className.split(" ");
  var existingIndex = classes.indexOf("active");

  if (existingIndex >= 0)
    classes.splice(existingIndex, 1);
  else
    classes.push("active");

  (".menu").className = classes.join(' ');
};*/