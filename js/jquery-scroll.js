// scroll top
$(window) .scroll (function () {
	if ($(this) .scrollTop() > 200) {
		$('.scrollUp') .fadeIn();
	}else {
		$('.scrollUp') .fadeOut();
	}
});
$('.scrollUp') .click (function () {
	$("html, body") .animate ({
		scrollTop: 0
	}, 600);
	return false
});

// for menu-bg change
$(window).on ('scroll', function () {
	if ($(window).scrollTop () > 550) {
		$('#menuSection').addClass('menuBg');
	} else {
		$('#menuSection').removeClass('menuBg');
	}
});