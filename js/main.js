(function($) {

  // Set variables

	var $rightEar     = $('#rightEar'),
      $leftEar      = $('#leftEar'),
      $headOutline  = $('#headOutline'),
      $mouth        = $('#mouth'),
      $rightAntenna = $('#rightAntenna'),
      $leftAntenna  = $('#leftAntenna'),
      $lineChart    = $('#lineChart'),
      $eyes         = $('#eyes')

	 mainTl = new TimelineMax();

  function animate() {
    var animateTl = new TimelineMax();

    animateTl
      .set($leftEar, {autoAlpha: 0, xPercent: +50})
      .set($rightEar, {autoAlpha: 0, xPercent: -50})
      .fromTo($headOutline, 1, {opacity: 0, scale: 0.5, transformOrigin: "50% 50% 0"}, {scale: 1, opacity:1, ease:Back.easeOut})
      .add('headOutline')
      .to($leftEar, 0.1, {autoAlpha: 1, xPercent: 0, ease: Back.easeOut})
      .to($rightEar, 0.1, {autoAlpha: 1, xPercent: 0, ease: Back.easeOut})
      .add('ears')
      .fromTo($eyes, 0.2, {opacity: 0, scale: 0.5, transformOrigin: "50% 50% 0"}, {scale: 1, opacity:1, ease:Back.easeOut})
      .add('eyes')
      .fromTo($mouth, 0.2, {opacity: 0, scale: 0.5, transformOrigin: "50% 50% 0"}, {scale: 1, opacity:1, ease:Back.easeOut})
      .add('mouth')
      .fromTo($leftAntenna, 0.2, {opacity: 0, scale: 0}, {scale: 1, opacity: 1, yPercent: -37, xPercent: -60, rotation: -28, ease:Back.easeOut})
      .fromTo($rightAntenna, 0.2, {opacity: 0, scale: 0}, {scale: 1, opacity: 1, yPercent: -60, xPercent: -37, rotation: 33, ease:Back.easeOut})
    
    return animateTl;
  }


	function init() {
    mainTl.add(animate());
	} 
	
	init();

})(jQuery);
