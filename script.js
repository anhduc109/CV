$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 600);
});

$(window).scroll(function () {
	var element = $("#element");
	if($(window).scrollTop() > 0) {
	  element.addClass("skill-bar");
	}
	else {
	  element.removeClass("skill-bar");
	}
  });