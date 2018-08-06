var strurl = "http://117.131.17.174:8000/pre/api/v1/cms/content-selectors";
$(document).ready(function() {
	initiliazeStats();

	$(".dev, .pre, .online").click(function() {
		const stats = spiderNose($(this).attr("class"));
		changeDev(stats[0]);
		changeStyle(stats[0]);
	});
});

function initiliazeStats() {
	let sessionStorageOfStats = sessionStorage.getItem("stats");
	changeStyle(sessionStorageOfStats);
}

function spiderNose(classList) {
	return classList.match(/dev/g) || classList.match(/online/g) || classList.match(/pre/g);
}

function changeDev(dev) {
	sessionStorage.setItem("stats", dev);
}

function changeStyle(dev) {
	$(".active").removeClass('active');
	let activeClassName = '';
	if (dev == "pre") {
		activeClassName = '.pre';
	} else if (dev == "dev") {
		activeClassName = '.dev';
	} else if (dev == "online") {
		activeClassName = '.online';
	}
	$(activeClassName).addClass("active");
}
