var link = document.querySelector('.menu-btn');
var submenu = document.querySelector('.menu');
link.addEventListener('click', function(event) {
	event.preventDefault();
	if (submenu.classList) {
		submenu.classList.toggle('active');
	} else {
		var classes = submenu.className.split(' ');
		var existingIndex = classes.indexOf('.active');

		if (existingIndex >= 0)
			classes.splice(existingIndex, 1);
		else
			classes.push('active');

		submenu.className = classes.join(' ');
	}
});