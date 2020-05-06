$(document).ready(function(){
	$('h1').click(function(){
		$('p').hide();
	});
});


$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});
