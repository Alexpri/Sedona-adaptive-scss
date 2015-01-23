$(function() {
	$(".menu-btn").click(function() {
		$(".menu").toggleClass("active");
	});
});
var map;
function initialize() {
 var Options = {
  center: new google.maps.LatLng(56, 37),
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 map = new google.maps.Map(document.getElementById("map_canvas"), Options);
}
google.maps.event.addDomListener(window, 'load', initialize);




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