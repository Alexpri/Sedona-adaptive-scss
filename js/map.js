/*var mapOptions = {
  center: new google.maps.LatLng(-34.397, 150.644),
  zoom: 8,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};*/

function initialize() {
 var latlng = new google.maps.LatLng(57.0442, 9.9116);
 var settings = {
 zoom: 15,
 center: latlng,
 mapTypeControl: true,
 mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
 navigationControl: true,
 navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
 mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
};
