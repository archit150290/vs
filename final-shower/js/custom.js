
/*----------------------------------------------------*/
/* WOW ANIMATION
/*----------------------------------------------------*/
new WOW().init();

/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#myCarousel'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
	
})(jQuery);


/*----------------------------------------------------*/
/* OWL CROUSEL ANIMATION
/*----------------------------------------------------*/
$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
	  nav:false,
	  dots: false,
	  loop:true,
	  autoplay:true,
	  autoplayTimeout:5000,
	  autoplayHoverPause:true,
		responsive:{
			0:{
            items:2,
        },
        400:{
            items:3,
        },
        1000:{
            items:4,
        },
		1280:{
            items:5,
        }
		}
		//navigation : true, 
//		slideSpeed : 300,
//		paginationSpeed : 400,
//		singleItem: true,
//		pagination: false,
//		rewindSpeed: 500
	});
 
});