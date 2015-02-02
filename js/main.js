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
