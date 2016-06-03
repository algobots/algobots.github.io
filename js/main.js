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
  
	function clearStage() {
    var clearTl = new TimelineMax();

    clearTl
        .set($head, {opacity: 0.5})
        .set($rightEar, {opacity: 0.5})
        .set($leftEar, {opacity: 0.5})
        .set($headOutline, {opacity: 0, scale:0})
        .set($mouth, {opacity: 0})
        .set($leftAntenna, {opacity: 0})
        .set($rightAntenna, {opacity: 0})
        .set($lineChart, {opacity: 0});

    // cleatTl.fromTo($headOutLine, 0.4, {autoAlpha:0}, {autoAlpha: 1})

    return clearTl;
  }

  function animate() {
    var animateTl = new TimelineMax();

    // var posY = $headOutline.position().top*2;
    // var posX = $headOutline.position().left*2;

    // console.log(posX, posY);

    animateTl
      .set([$rightEar, $leftEar, $mouth, $rightAntenna, $leftAntenna, $lineChart, $eyes], {autoAlpha: 0.5})
      // .set($headOutline, {scale:0})
      .fromTo($headOutline, 1, {opacity: 0, scale: 0.5, transformOrigin: "50% 50% 0"}, {scale: 1, opacity:1, ease:Back.easeOut});

      
    return animateTl;
  }


	function init() {
    // mainTl.add(clearStage());
    mainTl.add(animate());
	} 
	
	init();

})(jQuery);
